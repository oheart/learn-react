import React, { Component } from 'react';
import './App.css';
import JSX from './components/jsx'
import Part from './components/part'
import State from './components/state'
import Event from './components/event'
import Render from './components/render'
import List from './components/list'
import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
          <JSX />
          <Part />
          <State />
          <Event />
          <Render />
          <List />
          <Form />
      </div>
    );
  }
}

export default App;
