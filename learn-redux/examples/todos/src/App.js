import React, { Component } from 'react';
import './App.css';

import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Filters from './containers/Filters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <Filters />
      </div>
    );
  }
}

export default App;
