import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const render = () => {
    ReactDOM.render(
        <App />, 
        document.getElementById('root')
    );    
}

render();   //初始化渲染

store.subscribe(render);    //订阅，当state更新时，重新刷新页面

registerServiceWorker();
