import {LOAD_USERS} from '../actions/action-types';

const usersLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_USERS:
            return action.users;
        default:
            return state;
    }
}

export default usersLoaderReducer;