import React, {Component} from 'react'
import * as actions from '../actions'

class AddTodo extends Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    handleKeyDown(e){
        const value = e.target.value;
        if(e.key === 'Enter' && value.trim() !== ''){
            this.handleAddTodo(value)
        }
    }
    clickAddTodo(){
        const value = this.state.inputValue;
        if(value.trim() !== ''){
            this.handleAddTodo(value)
        } 
    }
    handleAddTodo(value){
        const {store} = this.props;
        store.dispatch(actions.addTodo(this.state.inputValue))
        this.setState({
            inputValue: ''
        })
    }
    render(){
        const {store} = this.props;
        const todos_redux = store.getState().todos;
        const allChecked = todos_redux.every(todo => todo.completed);
        return (
            <div>
                <input type="checkbox" 
                        checked={allChecked}
                        onChange={(e) => store.dispatch(actions.toggleAll(e.target.checked))}
                    />
                <input type="text" 
                        placeholder="Add todo"
                        value={this.state.inputValue}
                        onChange={(e) => this.handleChange(e)}
                        onKeyDown={(e) => this.handleKeyDown(e)}
                    />
                <button onClick={(e) => this.clickAddTodo() }>Add Todo</button>
            </div>
        )
    }
}

export default AddTodo