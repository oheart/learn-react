import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

// applyMiddleware 为 createStore 注入了 middleware:
var store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)

registerServiceWorker();
