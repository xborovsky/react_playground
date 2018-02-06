import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (
            <Todo todo={todo} key={todo.id} remove={remove} />
        );
    });
    return (<div className="list-group" style={{marginTop:'100px'}}>{todoNode}</div>);
};

export default TodoList;