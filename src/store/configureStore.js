import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares); 
    const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));
    sagaMiddleware.run(saga);
    return store;
  }