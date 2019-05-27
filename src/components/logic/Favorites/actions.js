export const ADD_CATEGORY = 'favorites/ADD_CATEGORY';
export const REMOVE_CATEGORY = 'favorites/REMOVE_CATEGORY';
export const ADD_ITEM = 'favorites/ADD_ITEM';
export const REMOVE_ITEM = 'favorites/REMOVE_ITEM';
export const ITEM_CLICKED = 'favorites/ITEM_CLICKED';

export const addCategory = (searchKeyword) => ({
    type: ADD_CATEGORY,
    payload: searchKeyword
});

export const removeCategory = (searchKeyword) => ({
    type: REMOVE_CATEGORY,
    payload: searchKeyword
});

export const addItem = (searchKeyword, itemData) => ({
    type: ADD_ITEM,
    payload: {searchKeyword,itemData}
});

export const removeItem = (searchKeyword, itemIndex) => ({
    type: REMOVE_ITEM,
    payload: {searchKeyword,itemIndex}
});

export const itemClicked = (searchKeyword, itemData) => ({
    type: ITEM_CLICKED,
    payload: {searchKeyword, itemData}
});


