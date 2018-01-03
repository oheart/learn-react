import React, {Component} from 'react'

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
            this.props.addTodo(value);
            this.setState({
                inputValue: ''
            })
        }
    }
    render(){
        const {todos, toggleAll} = this.props;
        const allChecked = todos.every(todo => todo.completed)
        return(
            <div>
               <input type="checkbox"
                    checked={allChecked}
                    onChange={(e) => toggleAll(e.target.checked)} 
                 />
               <input type="text" 
                     value={this.state.inputValue}
                     placeholder="Add todo"
                     onChange={(e) => this.handleChange(e)}
                     onKeyDown={(e) => this.handleKeyDown(e)}
                    />  
            </div>
        )
    }
}

export default AddTodo