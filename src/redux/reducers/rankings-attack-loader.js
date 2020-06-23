import {LOAD_RANKS_ATTACK} from '../actions/action-types';

const rankingsAttackLoaderReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_RANKS_ATTACK:
            return action.characters;
        default:
            return state;
    }
}

export default rankingsAttackLoaderReducer;