import React, { Component } from 'react';
import './App.css';
import JSX from './components/jsx'
import Part from './components/part'
import State from './components/state'
import Event from './components/event'
import Render from './components/render'
import List from './components/list'
import Form from './components/Form'
import StatusImprove from './components/statusImprove'
import Combination from './components/combination'

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
          <StatusImprove />
          <Combination />
      </div>
    );
  }
}

export default App;
