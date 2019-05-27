import { takeLatest, put } from 'redux-saga/effects';
import { ITEM_CLICKED } from './actions';
import { startSearch } from '../Search/actions';

function* itemClickedHandler(action) {
    yield put(startSearch(action.payload));
}

export default function* saga() {
    yield takeLatest(ITEM_CLICKED,itemClickedHandler);
}