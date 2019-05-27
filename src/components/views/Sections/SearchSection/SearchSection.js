import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../../../logic/Search';
import SearchInput from "./components/SearchInput";

const Wrapper = styled.div``;

const Instructions = styled.span`
    margin-right:10px;
`;

const SearchSection = (props) => {    
    return (
        <SearchContainer {...props}>
            {({onSearch, ...rest}) => (
                <Wrapper>
                    <Instructions>Search your favorites gifs:</Instructions>
                    <SearchInput onSearch={onSearch} {...rest} />
                </Wrapper>
            )}
        </SearchContainer>
    )
};

export default SearchSection;