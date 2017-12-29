import React,{Component} from 'react'

class Reservation extends Component{
    constructor(){
        super();
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
    }
    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    render(){
        return (
            <form>
                <label>
                    Is going:
                    <input 
                         name="isGoing"
                         type="checkbox"
                         checked={this.state.isGoing}
                         onChange={(e) => this.handleInputChange(e)}
                        />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests" 
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={(e) => this.handleInputChange(e)}
                      />
                </label>
            </form>
        )
    }
}

class MoreForm extends Component{
    render(){
        return (
            <div className="mt10">
                <Reservation />
            </div>
        )
    }
}

export default MoreForm