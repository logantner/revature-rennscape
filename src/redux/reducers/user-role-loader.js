import {LOAD_USER_ROLE} from '../actions/action-types';

const userRoleLoaderReducer = (state="", action) => {
    switch(action.type) {
        case LOAD_USER_ROLE:
            return action.role;
        default:
            return state;
    }
}

export default userRoleLoaderReducer;