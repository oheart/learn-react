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
        const {title, message} = this.props;
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    {title}
                </h1>
                <p className="Dialog-message">
                    {message}
                </p>
            </FancyBorder>
        )
    }
}

class WelcomeDialog extends Component{
    render(){
        return (
            <Dialog 
                title="Welcome"
                message="Thank you for visiting our spacecraft!"/>
        )
    }
}

class Instance extends Component{
    render(){
        return (
            <div className="mt10">
               <WelcomeDialog />
            </div>
        )
    }
}

export default Instance