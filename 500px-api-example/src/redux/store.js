import { applyMiddleware, createStore } from 'redux';
import searchReducer from './reducers';
import thunkMiddleware from './thunks';

const store = createStore(searchReducer, applyMiddleware(thunkMiddleware));

export default store;