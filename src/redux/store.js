import {createStore} from 'redux';
import {combineReducers} from 'redux';
// import loggerReducer from './reducers/logger';
// import userRoleLoaderReducer from './reducers/user-role-loader'
import userCharactersLoaderReducer from './reducers/user-characters-loader'
import rankingsTotalLoaderReducer from './reducers/rankings-total-loader'
import rankingsAttackLoaderReducer from './reducers/rankings-attack-loader'
import rankingsStrengthLoaderReducer from './reducers/rankings-strength-loader'
import rankingsDefenceLoaderReducer from './reducers/rankings-defence-loader'
import usersLoaderReducer from './reducers/users-loader'
import userInfoUpdaterReducer from './reducers/user-info-updater'


const allReducers = combineReducers({
    // isLoggedIn : loggerReducer, // legacy
    // userRole : userRoleLoaderReducer, // legacy
    userCharacters : userCharactersLoaderReducer,
    rankingsTotal : rankingsTotalLoaderReducer,
    rankingsAttack : rankingsAttackLoaderReducer,
    rankingsStrength : rankingsStrengthLoaderReducer,
    rankingsDefence : rankingsDefenceLoaderReducer,
    users : usersLoaderReducer,
    userInfo : userInfoUpdaterReducer,
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );