export const SET_DATA = 'gallery/SET_DATA';
export const ITEM_CLICKED = 'gallery/ITEM_CLICKED';

export const setGalleryData = (galleryData) => ({
    type: SET_DATA,
    payload: galleryData
});

export const itemClicked = (searchKeyword, itemData) => ({
    type: ITEM_CLICKED,
    payload: {searchKeyword, itemData}
});