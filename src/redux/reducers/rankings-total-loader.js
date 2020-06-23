import {LOAD_RANKS_TOTAL} from '../actions/action-types';

const rankingsTotalLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_RANKS_TOTAL:
            return action.characters;
        default:
            return state;
    }
}

export default rankingsTotalLoaderReducer;