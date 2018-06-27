import * as constants from './constants';

export const addTimer = (timer) => {
    return {
        type : constants.ADD_TIMER,
        timer
    };
};

export const deleteTimer = (id) => {
    return {
        type : constants.DELETE_TIMER,
        id
    };
};

export const editTimer = (id, timer) => {
    return {
        type : constants.EDIT_TIMER,
        id, timer
    };
};