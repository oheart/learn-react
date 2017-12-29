import React, {Component} from 'react'

class FancyBorder extends Component{
    render(){
        const {color, children} = this.props;
        return (
            <div className={'FancyBorder FancyBorder-' + color}>
                {children}
            </div>
        )
    }
}

class Dialog extends Component{
    render(){
        const {title, message, children} = this.props;
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {title}
                </h1>
                <p className="Dialog-message">
                    {message}
                </p>
                {children}
            </FancyBorder>
        )
    }
}

class SignUpDialog extends Component{
    constructor(){
        super();
        this.state = {
            login: ''
        }
    }
    handleChange(e){
        this.setState({
            login: e.target.value
        })
    }
    handleSignUp(){
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render(){
        const {login} = this.state.login;
        return (
            <Dialog
                title="Mars Exploration Program"
                message="How should we refer to you?" 
                >
                <input value={login}
                        onChange={(e) => this.handleChange(e)}
                        />
                <button onClick={this.handleSignUp.bind(this)}>
                    Sign Me Up!
                </button>
            </Dialog>
        )
    }
}

class Signup extends Component{
    render(){
        return (
            <div className="mt10">
                <SignUpDialog />
            </div>
        )
    }
}

export default Signup