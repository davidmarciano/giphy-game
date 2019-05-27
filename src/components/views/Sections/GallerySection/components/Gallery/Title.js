import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px; 
`;

const ActualTitle = styled.span`
    width:280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;     
    text-transform:capitalize; 
`;

const Title = (props) => <Wrapper><ActualTitle>{props.title}</ActualTitle></Wrapper>;

export default Title;

