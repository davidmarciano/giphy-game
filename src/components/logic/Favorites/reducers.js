import { ADD_CATEGORY, REMOVE_CATEGORY, ADD_ITEM, REMOVE_ITEM } from './actions';

const favorites = (state = { "": [] }, action) => {
    let newState;
    switch(action.type) {
        case ADD_CATEGORY:
            return {...state, ...{ [action.payload]:[] }};
        case REMOVE_CATEGORY:
            newState = {...state};
            delete newState[action.payload];
            return newState;
        case ADD_ITEM:
                const {searchKeyword, itemData} = action.payload;
                newState = {...state};
                newState[searchKeyword].push(itemData);
                return newState;
        case REMOVE_ITEM:
            newState = {...state};
            newState[action.payload.searchKeyword].splice(action.payload.itemIndex,1);
            return newState;        
        default: 
            return state;
    }
};

export default favorites;