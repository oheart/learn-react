import React, {Component} from 'react'

class TopicReply extends Component{
    render(){
        const {data} = this.props;
        return (
            <ul className="topic-reply-list">
                {
                    data.map(item =>
                        <li 
                            key={item.id}
                            className="trlist-item clear">
                            <span>{item.title}</span>
                            <span  className="tr-res-date">1小时前</span>
                        </li>
                    )
                }
           </ul>
        )
    }
}

export default TopicReply




