import * as constants from './constants';

const initialState = {
    timers : []
};

export default function timerReducers(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TIMER:
            return {timers : [...state.timers, action.timer]};
        case constants.DELETE_TIMER:
            const deleteIdx = state.timers.findIndex((element) => element.id === action.id);
            const timers = [...state.timers];
            return {timers : timers.splice(deleteIdx, 1)};
        case constants.EDIT_TIMER:
            const timersCopy = [...state.timers];
            const idx = state.timers.findIndex((element) => element.id === action.id);
            timersCopy[idx].title = action.timer.title;
            timersCopy[idx].project = action.timer.project;
            return {timers : timersCopy};
        default:
            return state;
    }
}