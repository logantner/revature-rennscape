import {LOAD_USER_CHARACTERS} from '../actions/action-types';

const userCharactersLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_USER_CHARACTERS:
            return action.characters;
        default:
            return state;
    }
}

export default userCharactersLoaderReducer;