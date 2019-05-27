export const START = 'search/START';
export const SUCCESS = 'search/SUCCESS';
export const FAILURE = 'search/FAILURE';
export const SET_RESULTS = 'search/SET_RESULTS';

export const startSearch = (query) => ({
    type : START,
    payload : query
});

export const searchSuccess = () => ({
    type : SUCCESS
});

export const searchFailure = (error) => ({
    type : FAILURE,
    payload : { error }
});

export const setSearchResults = (results) => ({
    type : SET_RESULTS,
    payload : results
});