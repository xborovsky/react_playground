import React from 'react';

const TodoForm = ({addTodo}) => {
    let input;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTodo(input.value);
            input.value = '';
        }}>
            <input ref={node => { input = node; }} className="form-control col-md-12" />
        </form>
    );
};

export default TodoForm;