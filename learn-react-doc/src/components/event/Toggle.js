import React, {Component} from 'react'

class Toggle extends Component{
    constructor(){
        super();
        this.state = {
            isToggleOn: true
        }
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render(){
        return (
            <div>
               <button onClick={this.handleClick.bind(this)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
               </button>
            </div>
        )
    }
}

export default Toggle