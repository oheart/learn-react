import React, { Component } from 'react';
import './App.css';
import JSX from './components/jsx'
import Part from './components/part'

class App extends Component {
  render() {
    return (
      <div className="App">
          <JSX />
          <Part />
      </div>
    );
  }
}

export default App;
