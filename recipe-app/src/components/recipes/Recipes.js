import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const RecipesComponent = ({recipes}) => {
    return (
        <div className="container">
            <h1>Recipes</h1>
            <ul className="list-group">
                {!recipes.length ?
                    <li className="list-group-item">no recipes...</li> :
                    recipes.map((recipe) => (
                        <NavLink to={`/recipe/${recipe.id}`} className="list-group-item list-group-item-action" key={recipe.id}>
                            <li key={recipe.id} style={{listStyleType : 'none'}}>{recipe.name}</li>
                        </NavLink>
                    ))
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {recipes : state.recipes};
};

const Recipes = connect(mapStateToProps)(RecipesComponent);

Recipes.propTypes = {
    recipes : PropTypes.arrayOf(PropTypes.object)
};

export default Recipes;