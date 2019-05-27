import React from 'react';
import styled from 'styled-components';
import Gallery from './components/Gallery';
import GalleryContainer from '../../../logic/Gallery';
import FavoritesContainer from '../../../logic/Favorites';

const Wrapper = styled.div``;

const GallerySection = (props) => ( // TODO: implement selected
    <Wrapper>
        <GalleryContainer {...props}>
            {({galleryData, searchKeyword, ...rest}) => {
                return (
                    <Gallery data={galleryData} title={`Gallery of ${searchKeyword}`} 
                        searchKeyword={searchKeyword} {...rest} />
                )
            }}
        </GalleryContainer>
        <FavoritesContainer {...props}>
            {({favoritesData, searchKeyword, ...rest}) => {
                return (
                    <Gallery data={favoritesData} title={`Favorites Gallery of ${searchKeyword}`}
                        aligment={'center'} searchKeyword={searchKeyword} {...rest} />
                )
            }}
        </FavoritesContainer>
    </Wrapper>    
)

export default GallerySection;