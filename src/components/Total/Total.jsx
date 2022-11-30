import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.veryDarkCyan};
    width: 20.3125rem;
    height: 15.9375rem;
    margin-top: 2.5rem;
    padding: 1.875rem 1.5625rem 1.5625rem 1.5625rem;
    border-radius: 0.9375rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: total;
        width: 100%;
        height: 100%;
        margin-top: 0;
    }
`;

const Detail = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0rem 0rem;
    grid-template-areas:
        'title nominal'
        'person nominal';
    margin-top: ${(props) => (props.total ? '-1.5625rem' : '0')};

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        margin-top: ${(props) => (props.total ? '-7.8125rem' : '0')};
    }
`;

const Title = styled.p`
    grid-area: title;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: 1.125rem;
`;

const PerPerson = styled.p`
    grid-area: person;
    color: ${(props) => props.theme.colors.firstDarkGrayishCyan};
    font-size: 0.9375rem;
    font-weight: 700;
`;

const Nominal = styled.p`
    grid-area: nominal;
    text-align: right;
    font-size: 1.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.strongCyan};
`;

const ResetButton = styled.button`
    background-color: ${(props) => props.theme.colors.strongCyan};
    color: ${(props) => props.theme.colors.veryDarkCyan};
    border: none;
    font-family: 'Space Mono', monospace;
    border-radius: 0.3125rem;
    font-size: 1.125rem;
    font-weight: 700;
    width: 100%;
    height: 3.125rem;

    :hover {
        cursor: pointer;
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.25;
        color: ${(props) => props.theme.colors.veryDarkCyan};
    }

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        align-self: flex-end;
    }
`;

const Total = (props) => {
    let isAFinite = isFinite(props.tipperperson);

    const resetButton = (e) => {
        e.preventDefault();
        console.log('test');

        props.billRef.current.value = '';

        props.customTipRef.current.value = '';

        props.peopleRef.current.value = '';

        let radioTip = document.getElementsByName('tip');
        for (let i = 0; i < radioTip.length; i++) {
            radioTip[i].checked = false;
        }

        props.setTotal({
            bill: 0,
            tip: 0,
            people: 0,
            tipperperson: 0,
            totalperperson: 0,
        });
    };

    return (
        <Container>
            <Detail>
                <Title>Tip Amount</Title>
                <PerPerson>/ person</PerPerson>
                <Nominal>
                    {props.tipperperson === 0
                        ? '$0.00'
                        : isAFinite
                        ? `$${props.tipperperson}`
                        : '$0.00'}
                </Nominal>
            </Detail>
            <Detail total>
                <Title>Total</Title>
                <PerPerson>/ person</PerPerson>
                <Nominal>
                    {props.totalperperson === 0
                        ? '$0.00'
                        : isAFinite
                        ? `$${props.totalperperson}`
                        : '$0.00'}
                </Nominal>
            </Detail>
            <ResetButton
                onClick={resetButton}
                marginTop
                disabled={props.tipperperson === 0 ? true : false}
            >
                RESET
            </ResetButton>
        </Container>
    );
};

export default Total;
