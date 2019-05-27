import { all } from 'redux-saga/effects';
import SearchSaga from '../components/logic/Search/saga';
import GallerySaga from '../components/logic/Gallery/saga';
import FavoritesSaga from '../components/logic/Favorites/saga';
import HistorySaga from '../components/logic/History/saga';

const sagas = [SearchSaga(),GallerySaga(),FavoritesSaga(),HistorySaga()];

export default function* rootSaga() {
    yield all(sagas);
}