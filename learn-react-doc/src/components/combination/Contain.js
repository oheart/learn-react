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

class WelcomeDialog extends Component{
    render(){
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
        )
    }
}

class Contain extends Component{
    render(){
        return (
            <div>
                <WelcomeDialog />
            </div>
        )
    }
}

export default Contain