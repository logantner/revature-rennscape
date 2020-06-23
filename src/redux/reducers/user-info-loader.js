import {LOAD_USER_INFO} from '../actions/action-types';

const userInfoLoaderReducer = (state={}, action) => {
    
    switch(action.type) {
        case LOAD_USER_INFO:
            return action.userInfo;
        default:
            return state;
    }
}

export default userInfoLoaderReducer;