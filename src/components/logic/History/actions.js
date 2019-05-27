export const ADD_ITEM = "history/ADD_ITEM";
export const REMOVE_ITEM = "history/REMOVE_ITEM";
export const ITEM_CLICKED = "history/ITEM_CLICKED";

export const addHistoryItem = (keyword) => ({
    type: ADD_ITEM,
    payload: keyword
});

export const removeHistoryItem = (keyword) => ({
    type: REMOVE_ITEM,
    payload: keyword
});

export const historyItemClicked = (keyword) => ({
    type: ITEM_CLICKED,
    payload: keyword
});