import {ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE} from './constants';

const initialState = {
    recipes : []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {...state, recipes : state.recipes.concat(action.data)};
        case EDIT_RECIPE:
            return state;
        case DELETE_RECIPE:
            return state;
        default : return state;
    }
};

export default rootReducer;