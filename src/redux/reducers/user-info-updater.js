import {LOAD_USER_INFO, LOG_OUT} from '../actions/action-types';

const userInfoupdaterReducer = (state={}, action) => {
    
    switch(action.type) {
        case LOAD_USER_INFO:
            return action.userInfo;
        case LOG_OUT:
            console.log("ajskhakjdhs")
            return {loggedIn: false};
        default:
            return state;
    }
}

export default userInfoupdaterReducer;