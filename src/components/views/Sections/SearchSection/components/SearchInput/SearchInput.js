import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
    width:200px;
    margin:0px;
    padding:7px;
    border-radius:3px;
    border:2px solid #000000;
    font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size:16px;
`;

const SearchInput = ({onSearch,...rest}) => <TextInput onChange={(e) => onSearch(e.target.value)} {...rest} />;

export default SearchInput;