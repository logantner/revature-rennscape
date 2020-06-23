import {LOAD_RANKS_STRENGTH} from '../actions/action-types';

const rankingsStrengthLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_RANKS_STRENGTH:
            return action.characters;
        default:
            return state;
    }
}

export default rankingsStrengthLoaderReducer;