import { SET_DATA } from './actions';

const gallery = (state = [], action) => {
    switch(action.type) {
        case SET_DATA:
            return [...action.payload].map((item) => ({
                id: item.id,
                title: item.title,
                image: item.images.fixed_height_still.url
            }));  
        default: 
            return state;
    }
};

export default gallery;