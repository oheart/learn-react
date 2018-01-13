import React, { Component } from 'react';
import './App.css';
import One from './One'
import Two from './Two'

class App extends Component {
  render() {
    return (
      <div className="App">
          <One />
          <Two />
      </div>
    );
  }
}

export default App;
