import {createStore} from 'redux';
import {combineReducers} from 'redux';
import loggerReducer from './reducers/logger';

const allReducers = combineReducers({
    isLoggedIn : loggerReducer
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );