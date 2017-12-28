import React, {Component} from 'react'

class UserGreeting extends Component{
    render(){
        return (
            <h1>Welcome back!</h1>
        )
    }
}

class GuestGreeting extends Component{
    render(){
        return (
            <h1>Please sign up.</h1>
        )
    }
}

class Greeting extends Component{
    render(){
        // 使用if进行条件渲染 
        const {isLoggedIn} = this.props;
        if(isLoggedIn){
            return <UserGreeting />
        }
        return <GuestGreeting />
    }

}

class LoginButton extends Component{
    render(){
        const { handleLoginClick } = this.props;
        return (
           <button onClick={(e) => handleLoginClick(e)}>
               Login
           </button>
        )
    }
}

class LogoutButton extends Component{
    render(){
        const { handleLogoutClick } = this.props;
        return (
            <button onClick={(e) => handleLogoutClick(e)}>
               Loginout
           </button>
        )
    }
}

class LoginControl extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        // 使用变量来储存元素进行条件渲染 
        let button = null;
        if(isLoggedIn){
            button = <LogoutButton handleLogoutClick={this.handleLogoutClick.bind(this)}/>
        }else{
            button = <LoginButton handleLoginClick={this.handleLoginClick.bind(this)}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}

class ConditionalRender extends Component{
    render(){
        return (
            <div>
                <LoginControl />
            </div>
        )
    }
}

export default ConditionalRender