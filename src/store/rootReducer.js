import {combineReducers} from 'redux';

import search from '../components/logic/Search/reducers';
import gallery from '../components/logic/Gallery/reducers';
import favorites from '../components/logic/Favorites/reducers';
import history from '../components/logic/History/reducers';

export default combineReducers({
    search, gallery, favorites, history
});