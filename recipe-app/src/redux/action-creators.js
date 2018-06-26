import { ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from './constants';

export const addRecipe = recipe => ({
        type : ADD_RECIPE,
        data : recipe
});

export const deleteRecipe = id => ({
    type : DELETE_RECIPE,
    id
})

export const editRecipe = (id, newData) => ({
    type : EDIT_RECIPE,
    id,
    data : newData
})