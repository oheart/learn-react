import React, {Component} from 'react'

class Contacts extends Component{
    render(){
        return (
            <div className="Contacts" />
        )
    }
}

class Chat extends Component{
    render(){
        return (
            <div className="Chat" />
        )
    }
}

class SplitPane extends Component{
    render(){
        const {left, right} = this.props;
        return (
            <div className="SplitPane clear">
                <div className="SplitPane-left">
                    {left}
                </div>
                <div className="SplitPane-right">
                    {right}
                </div>
            </div>
        )
    }
}

class Pane extends Component{
    render(){
        return (
            <SplitPane 
                 left={
                     <Contacts />
                 }
                 right={
                     <Chat />
                 }
                />
        )
    }
}

class Entry extends Component{
    render(){
        return (
            <div className="mt10">
                <Pane />
            </div>
        )
    }
}

export default Entry