import constants from './constants';
import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case constants.TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id) ?
                {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
};

const visibilityFilter = (state = constants.VISIBILITY_FILTERS.SHOW_ALL, action) => {
    switch (action.type) {
        case constants.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const reducers = combineReducers({todos, visibilityFilter});

export default reducers;