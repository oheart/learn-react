import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import queryString from 'query-string'


class TopicItem extends Component{
    render(){
       const {topicItem, location} = this.props;
       const author = topicItem.author;
       const queryTab = queryString.parse(location.search).tab || '';

       //控制置顶、精华显示
       let tabBtn = null;
       if(topicItem.top){
            tabBtn =  <span className="topic-tit-btn">置顶</span>
       }else if(topicItem.good){
            tabBtn =  <span className="topic-tit-btn">精华</span>
       }else if(queryTab === ''){
            switch(topicItem.tab){
                case 'share':
                    tabBtn =  <span className="topic-tit-btn">分享</span>
                    break;
                case 'ask':
                    tabBtn =  <span className="topic-tit-btn">问答</span>
                    break;
                case 'job':
                    tabBtn =  <span className="topic-tit-btn">招聘</span>
                    break;
            }
       }
       
       return (
            <div className="cnode-topics-item">
                <div className="topic-item-hd">
                    {tabBtn}
                    <h5 className="topic-desc-tit">{topicItem.title}</h5>
                </div>
                <div className="topic-item-bd">
                    <div className="topic-user-info">
                        <img className="topic-avatar" src={author.avatar_url} />
                        <div>
                            <span>{author.loginname}</span><br/>
                            <span>10天前</span>
                        </div>
                    </div>
                    <div className="topic-date-info">
                        <span>{topicItem.reply_count}/{topicItem.visit_count}</span><br/>
                        <span>2天前</span>
                    </div>
                </div>
            </div>
       )
    }
}



export default withRouter(connect()(TopicItem))