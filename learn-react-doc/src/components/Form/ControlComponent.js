import React, {Component} from 'react'

class NameForm extends Component{
    constructor(){
        super();
        this.state = {
            value: ''
        }
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e){
        alert('A name was submitted: ' + this.state.value)
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} 
                            onChange={(e) => this.handleChange(e)} 
                            />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class ControlComponent extends Component{
    render(){
        return (
            <div>
                <NameForm />
            </div>
        )
    }
}

export default ControlComponent