import {LOG_IN, LOG_OUT} from './action-types'

export const logIn = () => {
    return {
        type: LOG_IN
    };
}

export const logOut = () => {
    return {
        type: LOG_OUT
    };
}
