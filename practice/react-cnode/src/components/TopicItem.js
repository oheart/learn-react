import React, {Component} from 'react'

class TopicItem extends Component{
    render(){
       const {topics_redux} = this.props;
       console.log('topicItem',topics_redux)
       return (
            <div className="cnode-topics-item">
                <div className="topic-item-hd">
                    <span className="topic-tit-btn">分享</span>
                    <h5 className="topic-desc-tit">首届蚂蚁金服体验科技大会</h5>
                </div>
                <div className="topic-item-bd">
                    <div className="topic-user-info">
                        <img className="topic-avatar" src="https://avatars0.githubusercontent.com/u/156269?v=4&s=120" />
                        <div>
                            <span>i5ting</span><br/>
                            <span>10天前</span>
                        </div>
                    </div>
                    <div className="topic-date-info">
                        <span>14/3835</span><br/>
                        <span>2天前</span>
                    </div>
                </div>
            </div>
       )
    }
}

export default TopicItem