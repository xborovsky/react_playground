import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
