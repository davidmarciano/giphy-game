import { takeLatest, put, select } from 'redux-saga/effects';
import { ITEM_CLICKED } from './actions';
import { getFavoritesData } from './selectors';
import { removeCategory, removeItem } from './actions';
import { removeHistoryItem } from '../History/actions';

const areEquals = (obj1, obj2) => {
    return obj1.image === obj2.image;
};

function* itemClickedHandler(action) {
    // debugger;
    const {searchKeyword, itemData} = action.payload;
    const favorites = yield select(getFavoritesData);
    const isKeywordExistInFavorites = Object.keys(favorites).includes(searchKeyword);    
    if(isKeywordExistInFavorites) {
        const isCategoryHaveOneItem = favorites[searchKeyword].length === 1;
        const firstCategoryItem = favorites[searchKeyword][0];
        const firstCategoryItemAndSelectedItemAreEquals = areEquals(firstCategoryItem,itemData);
        if(isCategoryHaveOneItem && firstCategoryItemAndSelectedItemAreEquals) {
            yield put(removeItem(searchKeyword, 0));
            yield put(removeCategory(searchKeyword));
            yield put(removeHistoryItem(searchKeyword))
        } else {
            let itemIndex;
            favorites[searchKeyword].forEach((item,index) => {
                if(areEquals(item,itemData)) {
                    itemIndex = index;
                }
            });
            yield put(removeItem(searchKeyword, itemIndex));     
        }
    }
}

export default function* saga() {
    yield takeLatest(ITEM_CLICKED,itemClickedHandler);
}