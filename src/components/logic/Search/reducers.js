import { combineReducers } from 'redux';
import { START , SET_RESULTS} from './actions';

const keyword = (state = "", action) => {
    switch(action.type) {
        case START:
            return action.payload;
        default: 
            return state;
    }
};

const results = (state = {}, action) => {
    switch(action.type) {
        case SET_RESULTS:
            return {
                ...state,
                ...action.payload
            };
        default: 
            return state;
    }
};

export default combineReducers({
    keyword,
    results
});