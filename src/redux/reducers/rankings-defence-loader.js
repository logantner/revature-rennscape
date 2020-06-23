import {LOAD_RANKS_DEFENCE} from '../actions/action-types';

const rankingsDefenseLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_RANKS_DEFENCE:
            return action.characters;
        default:
            return state;
    }
}

export default rankingsDefenseLoaderReducer;