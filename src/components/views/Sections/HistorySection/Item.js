import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:120px;
    padding:5px;
    margin-left:10px;
    border:2px solid #000000;
    border-radius:3px;
    display:flex;
    justify-content: space-between;
    cursor:pointer;
    &:hover {
        opacity:0.8;
    }
    @media (max-width: 600px) {
        margin-bottom:10px;
    }      
`;

const Title = styled.span`
    width:100px;
    height:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  
`;

const Item = (props) => {
    const {itemName, onClick} = props;
    return (
        <Wrapper onClick={() => onClick(itemName)}>
            <Title>{itemName}</Title>
        </Wrapper>
    )
};

export default Item;