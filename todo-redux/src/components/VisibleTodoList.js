import { connect } from 'react-redux';
import { toggleTodo } from '../redux/action-creators';
import TodoList from './TodoList';
import constants from '../redux/constants';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case constants.VISIBILITY_FILTERS.SHOW_ALL:
            return todos;
        case constants.VISIBILITY_FILTERS.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case constants.VISIBILITY_FILTERS.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;