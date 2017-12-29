import React,{Component} from 'react'

class EssayForm extends Component{
    constructor(){
        super();
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        }
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit(e){
        alert('An essay was submitted: ' + this.state.value)
        e.preventDefault();
    }
    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Name:
                    <textarea value={this.state.value}
                        onChange={(e) => this.handleChange(e)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class Textarea extends Component{
    render(){
        return (
            <div className="mt10">
                <EssayForm />
            </div>
        )
    }
}

export default Textarea