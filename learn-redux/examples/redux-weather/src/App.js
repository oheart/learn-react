import React, { Component } from 'react';
import './App.css';

import City from './containers/City'
import Weather from './containers/Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <City />
        <Weather />
      </div>
    );
  }
}

export default App;
