import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

`

const Vector3 = () => {

    return (
        <>
            <Wrapper width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 1C25 1 21.5 2 18.5 5C15.5 8 13 13 13 13C13 13 10.5 8 7.5 5C4.5 2 1 0.999999 1 0.999999" stroke="#FCD043" strokeWidth="2"/>
            </Wrapper>
        </>
    );
}

export default Vector3;
