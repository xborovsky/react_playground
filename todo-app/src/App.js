import React, { Component } from 'react';
import './App.css';

import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';
import Title from './Title';

window.id = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  addTodo(val) {
    const todo = {text : val, id : window.id++};
    this.state.data.push(todo);
    this.setState({data : this.state.data});
  }

  handleRemove(id) {
    var dataArr = this.state.data.slice();
    const remainder = dataArr.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    this.setState({data : remainder});
  }

  render() {
    return (
      <div>
        <div className="container">
          <Title cnt={this.state.data.length} />
        </div>
        <div className="container">
          <TodoForm addTodo={this.addTodo.bind(this)} />
        </div>
        <div className="container">
          <TodoList 
            todos={this.state.data} 
            remove={this.handleRemove.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
