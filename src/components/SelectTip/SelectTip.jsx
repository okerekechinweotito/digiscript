import React from 'react';
import styled from 'styled-components/macro';

import { handleTip } from '../../utils/logic';

const Container = styled.div`
    margin-top: 2.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: tip;
        align-self: center;
        margin-top: 0;
    }
`;

const Title = styled.label`
    font-weight: 700;
`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 19.375rem;
    height: 10.625rem;
    margin-top: 0.625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 100%;
        height: 8.125rem;
    }
`;

const TipOptionRadioBullet = styled.input.attrs({
    type: 'radio',
})`
    visibility: hidden;
    height: 0;
    width: 0;
`;

const TipOptionRadioLabel = styled.label`
    background-color: ${(props) => props.theme.colors.veryDarkCyan};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.625rem;
    width: 9.0625rem;
    height: 3.125rem;
    border-radius: 0.3125rem;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        background-color: ${(props) =>
            props.theme.colors.firstLightGrayishCyan};
        color: ${(props) => props.theme.colors.veryDarkCyan};
    }

    ${TipOptionRadioBullet}:checked + && {
        background-color: ${(props) => props.theme.colors.strongCyan};
        color: ${(props) => props.theme.colors.veryDarkCyan};
    }

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: calc((95% / 3));
        margin-right: ${(props) => (props.marginRight ? '.625rem' : 0)};
    }
`;

const InputCustom = styled.input.attrs({
    type: 'number',
})`
    -moz-appearance: textfield;
    text-align: center;
    font-family: 'Space Mono', monospace;
    background-color: ${(props) => props.theme.colors.secondLightGrayishCyan};
    color: ${(props) => props.theme.colors.veryDarkCyan};
    border: none;
    border-radius: 0.3125rem;
    width: 9.0625rem;
    height: 3.125rem;
    font-size: 1.5rem;
    font-weight: 700;

    :focus {
        border: 0.125rem solid ${(props) => props.theme.colors.strongCyan};
        border-radius: 0.3125rem;
        outline: none;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: calc(95% / 3);
    }
`;

const SelectTip = (props) => {
    const handleClick = () => {
        props.customTipRef.current.value = '';
    };

    const handleChange = () => {
        let radioTip = document.getElementsByName('tip');
        for (let i = 0; i < radioTip.length; i++) {
            radioTip[i].checked = false;
        }
    };

    return (
        <Container>
            <Title htmlFor='custom'>Select Tip %</Title>
            <Form
                onChange={(e) => {
                    handleTip(e, props.setTotal, props.total);
                }}
            >
                <TipOptionRadioBullet
                    name='tip'
                    id='fivepercent'
                    value='5'
                    onClick={() => {
                        handleClick();
                    }}
                />
                <TipOptionRadioLabel htmlFor='fivepercent' marginRight>
                    5%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet
                    name='tip'
                    id='tenpercent'
                    value='10'
                    onClick={() => {
                        handleClick();
                    }}
                />
                <TipOptionRadioLabel htmlFor='tenpercent' marginRight>
                    10%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet
                    name='tip'
                    id='fifteenpercent'
                    value='15'
                    onClick={() => {
                        handleClick();
                    }}
                />
                <TipOptionRadioLabel htmlFor='fifteenpercent'>
                    15%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet
                    name='tip'
                    id='twentyfivepercent'
                    value='25'
                    onClick={() => {
                        handleClick();
                    }}
                />
                <TipOptionRadioLabel htmlFor='twentyfivepercent' marginRight>
                    25%
                </TipOptionRadioLabel>
                <TipOptionRadioBullet
                    name='tip'
                    id='fiftypercent'
                    value='50'
                    onClick={() => {
                        handleClick();
                    }}
                />
                <TipOptionRadioLabel htmlFor='fiftypercent' marginRight>
                    50%
                </TipOptionRadioLabel>
                <InputCustom
                    name='tip'
                    id='custom'
                    placeholder='Custom'
                    onChange={() => {
                        handleChange();
                    }}
                    ref={props.customTipRef}
                />
            </Form>
        </Container>
    );
};

export default SelectTip;
