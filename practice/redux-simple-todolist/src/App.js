import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import LeftTodo from './containers/LeftTodo'
import Filters from './containers/Filters'
import ClearCompleted from './containers/ClearCompleted'

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddTodo />
          <TodoList />
          <LeftTodo />
          <Filters /> 
          <ClearCompleted />
      </div>
    );
  }
}

export default App;
