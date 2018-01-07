import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {filterTypes} from '../constants'



class TodoList extends Component{
    render(){
        const {todos_redux, dispatch_toggleTodo, filters_redux} = this.props;
     
        const activeFilter = filters_redux.filter((item) => item.isActive)[0];
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
                        <div key={todo.ID}  
                             style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                             }}
                             >
                            <span onClick={(e) => dispatch_toggleTodo(todo.ID)}>
                                {todo.value}
                            </span>
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
        dispatch_toggleTodo: (id) => dispatch(actions.toggleTodo(id))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)