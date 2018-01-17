import React, {Component} from 'react'
import * as actions from '../actions'
import {filterTypes} from '../constants'


class TodoList extends Component{
    render(){
        const {store} = this.props;
        const todos_redux = store.getState().todos;
        const filters_redux = store.getState().filters;

        const activeFilter = filters_redux.find(filterItem => filterItem.isActive);
        let todosToDisplay = todos_redux;

        if(activeFilter.name === filterTypes.Active){
            todosToDisplay = todos_redux.filter(todo => !todo.completed)
        }else if(activeFilter.name === filterTypes.Completed){
            todosToDisplay = todos_redux.filter(todo => todo.completed)
        }

        return (
            <div>
                {
                    todosToDisplay.map((todo, index) => 
                        <div key={todo.ID}>
                            <input type="checkbox"
                                checked={todo.completed}
                                onChange={() => store.dispatch(actions.toggleTodo(todo.ID))}
                                />
                            <span 
                                style={{ 
                                        textDecoration: (todo.completed ? 'line-through' : 'none') 
                                    }}
                                onClick={() => store.dispatch(actions.toggleTodo(todo.ID))}
                                >
                                {todo.value}
                            </span>
                            {' '}
                            <span 
                                onClick={() => store.dispatch(actions.deleteTodo(todo.ID))}>
                                x
                            </span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default TodoList