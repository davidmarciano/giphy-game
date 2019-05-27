import React from 'react';
import styled from 'styled-components';
import * as Sections from '../Sections';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
`;

const MainContent = (props) => {
    return (
        <Wrapper>
            <h1> GIPHY game </h1>
            <Sections.SearchSection />
            <Sections.GallerySection />
            <Sections.HistorySection />
        </Wrapper>
    )     
};

export default MainContent;