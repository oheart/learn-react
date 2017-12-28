import React, { Component } from 'react';
import './App.css';
import JSX from './components/jsx'
import Part from './components/part'
import State from './components/state'
import Event from './components/event'
import Render from './components/render'

class App extends Component {
  render() {
    return (
      <div className="App">
          <JSX />
          <Part />
          <State />
          <Event />
          <Render />
      </div>
    );
  }
}

export default App;
