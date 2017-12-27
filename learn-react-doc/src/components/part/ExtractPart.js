import React, { Component } from 'react'
import utils from './utils'

class Avatar extends Component{
    render(){
        const {user} = this.props;
        return (
            <img className="Avatar" 
                    src={user.avatarUrl}
                    alt={user.name}
                />
        )
    }
}

class UserInfo extends Component{
    render(){
        const {user} = this.props;
        return (
            <div className="UserInfo">
                <Avatar user={user}/>
                <div className="UserInfo-name">
                    {user.name}
                </div>
            </div>
        )
    }
}

class Comment extends Component{
    
    render(){
        const { date, text, author } = this.props;
        return (
            <div className="Comment">
                <UserInfo user={author}/>
                <div className="Comment-text">
                    {text}
                </div>
                <div className="Comment-date">
                   {utils.formatDate(date)}
                </div>
            </div>
        )
    }
}


// 这个组件接收author(对象)、text(字符串)、以及date(Date对象)作为props, 用来描述一个社交媒体网站上的评论。
class ExtractPart extends Component{
    render(){
        const comment = {
            date: new Date(),
            text: 'I hope you enjoy learing React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'http://placekitten.com/g/64/64'
            }
        }
        return (
            <div>
                <Comment 
                    date={comment.date}
                    text={comment.text}
                    author={comment.author} />
            </div>
        )
    }
}

export default ExtractPart