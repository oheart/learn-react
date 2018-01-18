import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

let div = document.createElement('div');
div.setAttribute('id', 'root')
document.body.appendChild(div)

const mountNode = document.getElementById('root')

ReactDOM.render(
    <App />, 
    mountNode
);
