import * as types from './action-types'

export const loadUserRole = (role) => {
    return {
        type: types.LOAD_USER_ROLE,
        role
    };
}

export const loadUserCharacters = (characters) => {
    return {
        type: types.LOAD_USER_CHARACTERS,
        characters
    };
}

export const loadRanksTotal = (characters) => {
    return {
        type: types.LOAD_RANKS_TOTAL,
        characters
    };
}

export const loadRanksAttack = (characters) => {
    return {
        type: types.LOAD_RANKS_ATTACK,
        characters
    };
}

export const loadRanksStrength = (characters) => {
    return {
        type: types.LOAD_RANKS_STRENGTH,
        characters
    };
}

export const loadRanksDefence = (characters) => {
    return {
        type: types.LOAD_RANKS_DEFENCE,
        characters
    };
}

export const loadUsers = (users) => {
    return {
        type: types.LOAD_USERS,
        users
    };
}

export const updateUserInfo = (userInfo) => {
    return {
        type: types.LOAD_USER_INFO,
        userInfo
    };
}
