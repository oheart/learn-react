import React, {Component} from 'react'

class LeftTodo extends Component{
    render(){
        const {store} = this.props;
        const todos_redux = store.getState().todos;
        const activeTodos = todos_redux.filter(todo => !todo.completed)
        return (
            <div>
                {activeTodos.length}
                Left count
            </div>
        )
    }
}

export default LeftTodo