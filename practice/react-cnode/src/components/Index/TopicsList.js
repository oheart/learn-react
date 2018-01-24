import React, {Component} from 'react'
import {connect} from 'react-redux'

import TopicItem from './TopicItem'
import * as actions from '../../actions'
import LoadMore from './LoadMore'

class TopicsList extends Component{
    componentWillMount(){
        const { dispatch_getTopics, header_menus_redux } = this.props;
        console.log(this.props)
        console.log(dispatch_getTopics)
        
        const ActiveHeaderMenu = header_menus_redux.find(item => item.isActive);
        console.log('ActiveHeaderMnu: ', ActiveHeaderMenu)
        const ActiveName = ActiveHeaderMenu.name;

        switch(ActiveName){
            case '全部':
                dispatch_getTopics('', 1)
                break;
            case '精华':
                dispatch_getTopics('good', 1)
                break;
            case '分享':
                dispatch_getTopics('share', 1)
                break;
            case '问答':
                dispatch_getTopics('ask', 1)
                break;
            case '招聘':
                dispatch_getTopics('job', 1)
                break;
            case '测试':
                dispatch_getTopics('dev', 1)
                break;
        }
    }
    render(){
        const {topics_redux} = this.props;
        console.log(topics_redux)
        return (
            <main className="cnode-main-wrapper">
               <div className="cnode-topics-list">
                    {
                        topics_redux.map((topicItem) => 
                            <TopicItem 
                                key={topicItem.id}
                                topicItem={topicItem}
                            />
                        )
                    }
                    {/* {
                        topics_redux.length > 0 
                                ? <LoadMore />
                                : ''
                    } */}
               </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        header_menus_redux: state.headerMenus,
        topics_redux: state.topicsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_getTopics: (sort, page) => dispatch(actions.req_getTopics(sort, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList)