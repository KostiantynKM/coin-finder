import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';

import store from './redux/store';

// DEV
window.store = store;

ReactDOM.render(
    <Provider store={store}>
                <App />
    </Provider>,
    document.getElementById('root')
);
