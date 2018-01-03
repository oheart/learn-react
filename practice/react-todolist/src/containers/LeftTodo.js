import React, {Component} from 'react'

class LeftTodo extends Component{
    render(){
        const {todos} = this.props;
        const activeTodos = todos.filter((todo) => !todo.completed)
        return (
            <div>
                <span>{activeTodos.length}</span>
                <span> Left count</span>
            </div>
        )
    }
}

export default LeftTodo