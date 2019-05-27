import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    background-color: #000000;
    border-radius: 10px;
    border: 3px solid #000000;    
`;

const ActualImage = styled.img`
    /* width:100%; */
`;

const Image = (props) => (
    <Wrapper>
        <ActualImage src={props.image} />                   
    </Wrapper>
)

export default Image;

