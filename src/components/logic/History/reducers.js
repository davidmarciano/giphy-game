import { ADD_ITEM, REMOVE_ITEM } from './actions';

const history = (state = [], action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case REMOVE_ITEM:       
            const isExist = state.includes(action.payload);
            const newState = state.filter((item) => item !== action.payload);
            return isExist ? newState : state;
        default: 
            return state;
    }
};

export default history;