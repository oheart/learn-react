import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

let div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);

const mountNode = document.getElementById('root');

// applyMiddleware 为 createStore 注入了 middleware:
const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mountNode
);
