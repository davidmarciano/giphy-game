import React from 'react';
import styled from "styled-components";
import { Title, Image } from './';

const Wrapper = styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    border: 3px solid #000000;
    border-radius: 10px;
    margin:10px;
    padding:10px;    
    cursor:pointer;
    &:hover {
        opacity:0.8;
    }
    @media (max-width: 400px) {
        width:250px;
    }
`;

const Item = (props) => {
    const { title, image, onGalleryItemClicked, searchKeyword } = props;
    const itemData = { title, image };
    return (
        <Wrapper onClick={() => onGalleryItemClicked(searchKeyword, itemData)}>
            <Title title={title}/>
            <Image image={image} />                    
        </Wrapper>
    )
};

export default Item;

