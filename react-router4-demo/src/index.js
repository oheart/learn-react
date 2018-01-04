import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));


import {HashRouter} from 'react-router-dom'

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
),
document.getElementById('root')
)


registerServiceWorker();
