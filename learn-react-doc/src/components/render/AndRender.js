import React, {Component} from 'react'

class Mailbox extends Component{
    render(){
        const {unreadMessages} = this.props;
        return (
            // 使用&&操作符来进行条件渲染 
            <div>  
                {
                    unreadMessages.length > 0 && 
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
            </div>
        )
    }
}

class AndRender extends Component{
    render(){
        const messages = ['React', 'Re: React', 'Re:Re: React']
        return (
            <div>
                <Mailbox unreadMessages={messages}/>
            </div>
        )
    }
}

export default AndRender