import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionAndTypes from './actions';
import { GiphyApiHandler } from '../../../infra';
import { setGalleryData } from '../Gallery/actions';

const { START, searchSuccess, searchFailure, setSearchResults } = actionAndTypes;

function* onSuccess(results) {
    yield put(searchSuccess());
    yield put(setSearchResults(results));
    yield put(setGalleryData(results));
}

function* onFailure(error) {
    console.log(error);
    yield put(searchFailure(error));
}

function* startSearchHandler(action) {
    const { payload } = action;
    try {
        const {data} = yield call(GiphyApiHandler.getGifs,payload);
        yield onSuccess(data);        
    }
    catch(e) {
        yield onFailure(e);
    }
}

export default function* saga() {
    yield takeLatest(START,startSearchHandler);
}