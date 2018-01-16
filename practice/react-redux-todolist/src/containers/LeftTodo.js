import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeftTodo extends Component{
    render(){
        const {todos_redux} = this.props;
        const activeTodos = todos_redux.filter((todo) => !todo.Checked);
        return (
            <div>
                {activeTodos.length}
                Left count
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos
    }
}

export default connect(mapStateToProps)(LeftTodo)