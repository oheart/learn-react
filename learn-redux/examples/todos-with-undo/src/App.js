import React, { Component } from 'react';
import './App.css';

import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import Filters from './containers/Filters'
import UndoRedo from './containers/UndoRedo'

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddTodo />
          <TodoList />
          <Filters />
          <UndoRedo />
      </div>
    );
  }
}

export default App;
