import React from 'react';
import styled from "styled-components";
import { Item } from './';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

const Title = styled.h2`
    display:flex;
    @media (max-width: 400px) {
        font-size:18px;
        line-height:18px;
        margin-bottom:0px;
    }       
`;

const ItemsWrapper = styled.div`
    display:flex;
    justify-content:${({aligment}) => aligment ? aligment : 'space-around'};
    flex-wrap:wrap;
    padding:10px 0px;
`;

const Gallery = ({data,title,aligment,...rest}) => {
    return data && data.length > 0 ? (
        <Wrapper>
            <Title>{title}</Title>
            <ItemsWrapper aligment={aligment}>
                {data && data.map((item,index) => <Item {...item} {...rest} key={index} />)}
            </ItemsWrapper>
        </Wrapper>   
    ) : false;
};

export default Gallery;