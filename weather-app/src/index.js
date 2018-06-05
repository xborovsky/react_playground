import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'

const API_KEY = 'ae5ca1977106477c7f5d2a6ffe44efeb';

axios.interceptors.request.use((config) => {
    config.params = {
        'APPID' : API_KEY,
        'units' : 'metric'
    };
    return config;
});

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);
registerServiceWorker();
