import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import API_KEY from './utils/api-key';

axios.defaults.baseURL = 'http://api.eliteprospects.com/beta';
axios.defaults.params = {'apiKey' : API_KEY};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
