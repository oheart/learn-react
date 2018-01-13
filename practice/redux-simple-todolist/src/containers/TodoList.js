import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {filterTypes} from '../constants'

class TodoList extends Component{
    render(){
        const {todos_redux, filters_redux, dispatch_toggleTodo, dispatch_deleteTodo} = this.props;
       
        const activeFilter = filters_redux.find(filterItem => filterItem.isActive);
        let todosTodisplay = todos_redux;
        
        if(activeFilter.name === filterTypes.Active){
            todosTodisplay = todos_redux.filter(todo => !todo.Checked)
        }else if(activeFilter.name === filterTypes.Completed){
            todosTodisplay = todos_redux.filter(todo => todo.Checked)
        }

        return (
            <div>
                {
                   todosTodisplay.map((todo,index) => 
                        <div key={todo.ID}>
                            <input type="checkbox"
                                  checked={todo.Checked}
                                  onChange={(e) => dispatch_toggleTodo(index)} 
                                />
                            <span>{todo.value}</span>
                            <span onClick={(e) => dispatch_deleteTodo(index)}>  X</span>
                        </div>
                   )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos,
        filters_redux: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_toggleTodo: (todoIndex) => dispatch(actions.toggleTodo(todoIndex)),
        dispatch_deleteTodo: (todoIndex) => dispatch(actions.deleteTodo(todoIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)