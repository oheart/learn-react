
import React, {Component} from 'react'

class FlavorForm extends Component{
    constructor(){
        super();
        this.state = {
            value: 'coconut'
        }
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e){
        alert('Your favorite flavor is: ' + this.state.value)
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} 
                        onChange={(e) => this.handleChange(e)} >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class Select extends Component{
    render(){
        return (
            <div className="mt10">
                <FlavorForm />
            </div>
        )
    }
}

export default Select