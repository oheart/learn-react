import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

const render = () =>  ReactDOM.render(
    <App 
        store={store}
        />, 
    document.getElementById('root')
);

render();

store.subscribe(render)

registerServiceWorker();
