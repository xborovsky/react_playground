import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

const RecipeDetailComponent = ({recipe}) => {
    return (
        <div className="container">
            <Breadcrumb items={[{label : 'Recipes', link : '/'}, {label : `Detail (${recipe.id})`, active: true}]} />

            <h1>{recipe.name.charAt(0).toUpperCase() + recipe.name.slice(1)}</h1>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients.join(',')}</p>
            <h3>Directions</h3>
            <p>{recipe.directions}</p>
        </div>
    );
};

RecipeDetailComponent.propTypes = {
    recipe : PropTypes.shape({
        name : PropTypes.string,
        ingredients : PropTypes.arrayOf(PropTypes.string),
        directions : PropTypes.string
    }).isRequired
};

const mapStateToProps = (state, ownProps) => {
    return ({
        recipe : state.recipes.filter((recipe) => recipe.id === ownProps.match.params.id)[0]
    });
};

const RecipeDetail = connect(mapStateToProps)(RecipeDetailComponent);

export default RecipeDetail;