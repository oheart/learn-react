import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import LeftTodo from './containers/LeftTodo'
import Filters from './containers/Filters'
import ClearCompleted from './containers/ClearCompleted'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:[
        {
          
          value: 'aaaaaa',
          completed: true
        },
        {
          value: 'bbbbb',
          completed: false
        },
        {
          value: 'ccccc',
          completed: false
        }
      ],
      filters:[
        {
          name: 'All',
          isActive: true
        },
        {
          name: 'Active',
          isActive: false
        },
        {
          name: 'Completed',
          isActive: false
        }
      ]
    }
  }
  addTodo(value){
    this.setState({
      todos: [{value}, ...this.state.todos]
    })
  }
  toggleAll(isCompleted){
     this.setState({
       todos: this.state.todos.map((todo) => ({...todo, completed: isCompleted}))
     })
  }
  toggleTodo(todoIndex){
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        if(index === todoIndex){
          return {...todo, completed: !todo.completed}
        }
        return todo;
      })
    })
  }
  activeFilter(filterIndex){
    this.setState({
      filters: this.state.filters.map((filter, index) => {
        //  等价于
        //  if (index === filterIndex) return {...filter, isActive: true}
        //  return {...filter, isActive: false}
        return {...filter, isActive: (index === filterIndex)}
      })
    })
  }
  clearCompleted(){
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed)
    })
  }
  
  render() {
    return (
      <div className="App">
          <AddTodo
               addTodo={this.addTodo.bind(this)}
               todos={this.state.todos}
               toggleAll={this.toggleAll.bind(this)}
               />
          <TodoList 
              todos={this.state.todos}
              toggleTodo={this.toggleTodo.bind(this)}
              filters={this.state.filters}
              />
          <LeftTodo
              todos={this.state.todos}  
              />
          <Filters 
              filters={this.state.filters}
              activeFilter={this.activeFilter.bind(this)}
            />
          <ClearCompleted
              clearCompleted={this.clearCompleted.bind(this)}
             />
      </div>
    );
  }
}

export default App;
