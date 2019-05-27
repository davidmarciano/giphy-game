import { takeLatest, put, select } from 'redux-saga/effects';
import { ITEM_CLICKED } from './actions';
import { getFavoritesData } from '../Favorites/selectors';
import { addCategory, addItem } from '../Favorites/actions';
import { getHistory } from '../History/selectors';
import { addHistoryItem } from '../History/actions';

function* itemClickedHandler(action) {
    const {searchKeyword, itemData} = action.payload;
    const favorites = yield select(getFavoritesData);
    const isKeywordExistInFavorites = Object.keys(favorites).includes(searchKeyword);
    if(isKeywordExistInFavorites) {
        let isItemExistInKeyword = false;
        favorites[searchKeyword].forEach((obj) => {
            if(obj.image === itemData.image) {
                isItemExistInKeyword = true;
            }                    
        });        
        if(!isItemExistInKeyword) {
            yield put(addItem(searchKeyword,itemData));
        }
    } else {
        yield put(addCategory(searchKeyword));
        yield put(addItem(searchKeyword,itemData));
        const history = yield select(getHistory);
        if(!history.includes(searchKeyword)) {
            yield put(addHistoryItem(searchKeyword));
        }        
    }
}

export default function* saga() {
    yield takeLatest(ITEM_CLICKED,itemClickedHandler);
}