import React, {Component} from 'react'
import {connect} from 'react-redux'

class TopicItem extends Component{
    render(){
       const {topicItem, header_menus_redux} = this.props;
       const author = topicItem.author;

       let tabBtn = null;
       const activeHeaderMenu = header_menus_redux.find(item => item.isActive);
       if(topicItem.top){
            tabBtn =  <span className="topic-tit-btn">置顶</span>
       }else if(topicItem.good){
            tabBtn =  <span className="topic-tit-btn">精华</span>
       }else if(activeHeaderMenu.name === '全部'){
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

const mapStateToProps = (state) => {
    return {
        header_menus_redux: state.headerMenus
    }
}

export default connect(mapStateToProps)(TopicItem)