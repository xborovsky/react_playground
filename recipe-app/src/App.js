import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateRecipe from './components/create-recipe/CreateRecipe';
import Recipes from './components/recipes/Recipes';
import RecipeDetail from './components/recipe-detail/RecipeDetail';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple recipe app</h1>
        </header>
        <Menu />
        <Switch>
          <Route exact path='/' component={Recipes}/>
          <Route path='/new' component={CreateRecipe}/>
          <Route path='/recipe/:id' component={RecipeDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
