import React from 'react';
import styled from 'styled-components/macro';

import PeopleIcon from '../../images/icon-person.svg';

import { handlePeople, calculate } from '../../utils/logic';

const Container = styled.div`
    margin-top: 2.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: people;
        margin-top: 0;
    }
`;

const Title = styled.label`
    font-weight: 700;
`;

const InputWrapper = styled.div`
    position: relative;
    margin-top: 0.625rem;
`;

const Input = styled.input.attrs({
    type: 'number',
})`
    -moz-appearance: textfield;
    background-color: ${(props) => props.theme.colors.secondLightGrayishCyan};
    color: ${(props) => props.theme.colors.veryDarkCyan};
    border: none;
    text-align: right;
    font-family: 'Space Mono', monospace;
    width: 19.375rem;
    height: 2.8125rem;
    padding: 0.9375rem 1.25rem 0.9375rem 2.5rem;
    border-radius: 0.3125rem;
    font-size: 1.375rem;
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
        width: 100%;
    }
`;

const Icon = styled.img`
    position: absolute;
    top: 50%;
    left: 1.25rem;
    transform: translateY(-50%);
    width: 0.75rem;
`;

const People = (props) => {
    return (
        <Container>
            <Title htmlFor='people'>Number of People</Title>
            <InputWrapper>
                <Icon src={PeopleIcon} alt='People Icon' />
                <Input
                    id='people'
                    name='People'
                    placeholder='0'
                    onChange={(e) => {
                        handlePeople(e, props.setTotal, props.total);
                    }}
                    onKeyUp={(e) => {
                        calculate(e, props.setTotal, props.total);
                    }}
                    ref={props.peopleRef}
                    noValidate
                />
            </InputWrapper>
        </Container>
    );
};

export default People;
