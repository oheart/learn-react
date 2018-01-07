import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class AddTodo extends Component{
    constructor(){
        super();
        this.state  = {
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
           this.handleAddTodo(value);
        }
    }
    clickAddTodo(){
        this.handleAddTodo(this.state.inputValue);
    }
    handleAddTodo(value){
        if (!value) {
            return
          }
        this.props.dispatch_addTodo(value)
        this.setState({
            inputValue: ''
        })
    }
    render(){
        return (
            <div>
                    <input type="text"
                        value={this.state.inputValue} 
                        placeholder="Add todo"
                        onChange={(e) => this.handleChange(e)}
                        onKeyDown={(e) => this.handleKeyDown(e)}
                    />
                    <button onClick={(e) => this.clickAddTodo() }>Add Todo</button>
            </div>
        )
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        dispatch_addTodo: (text) => dispatch(actions.addTodo(text))
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)