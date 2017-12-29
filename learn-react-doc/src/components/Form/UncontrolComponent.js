import React, {Component} from 'react'

class NameForm extends Component{
    handleSubmit(e){
        alert('A name was submit: ' + this.input.value)
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Name:
                    <input type="text" 
                        defaultValue="Bob"
                        ref={(input) => this.input = input}
                        />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class UncontrolComponent extends Component{
    render(){
        return (
            <div className="mt10">
                <NameForm />
            </div>
        )
    }
}

export default UncontrolComponent