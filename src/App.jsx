import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';


import Bill from './components/Bill/Bill';
import SelectTip from './components/SelectTip/SelectTip';
import People from './components/People/People';
import Total from './components/Total/Total';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
    }
`;

const HeaderTitle = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin: 4em 0 1em 0;
    font-size: 1.4em;
    font-weight: 700;
    letter-spacing: 5px
`;

const Main = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    width: 100%;
    height: 100%;
    border-radius: 1.5625rem 1.5625rem 0 0;
    padding: 2.5rem 1.875rem;
    margin-top: 2.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 57.5rem;
        height: 30rem;
        padding: 1.875rem 2.8125rem;
        border-radius: 1.5625rem;
    }
`;

const Form = styled.form`
    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.1fr 1fr 0.1fr;
        gap: 0rem 1.25rem;
        grid-template-areas:
            'bill total'
            'tip total'
            'people total';
    }
`;

function App() {
    const [total, setTotal] = useState({
        bill: 0,
        tip: 0,
        people: 0,
        tipperperson: 0,
        totalperperson: 0,
    });

    const billRef = useRef(null);
    const customTipRef = useRef(null);
    const peopleRef = useRef(null);

    return (
        <Container>
            <HeaderTitle>
                TIP CALCULATOR DIGISCRIPT
            </HeaderTitle>
            <Main>
                <Form>
                    <Bill setTotal={setTotal} total={total} billRef={billRef} />
                    <SelectTip
                        setTotal={setTotal}
                        total={total}
                        customTipRef={customTipRef}
                    />
                    <People
                        setTotal={setTotal}
                        total={total}
                        peopleRef={peopleRef}
                    />
                    <Total
                        setTotal={setTotal}
                        total={total}
                        tipperperson={total.tipperperson}
                        totalperperson={total.totalperperson}
                        billRef={billRef}
                        customTipRef={customTipRef}
                        peopleRef={peopleRef}
                    />
                </Form>
            </Main>
        </Container>
    );
}

export default App;
