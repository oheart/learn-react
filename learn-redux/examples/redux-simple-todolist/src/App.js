import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import LeftTodo from './containers/LeftTodo'
import Filters from './containers/Filters'
import ClearCompleted from './containers/ClearCompleted'

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div className="App">
          <AddTodo 
              store={store}
            />
          <TodoList 
             store={store}
             />
          <LeftTodo 
            store={store}
          />
          <Filters 
            store={store}
          />
          <ClearCompleted 
            store={store}
            />
      </div>
    );
  }
}

export default App;
