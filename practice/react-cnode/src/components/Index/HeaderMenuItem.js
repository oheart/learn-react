import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'


class HeaderMenuItem extends Component{
    clickHeaderMenus(topicName){
        const {dispatch_toggleMenu, dispatch_getTopics} = this.props;
        dispatch_toggleMenu(topicName)
        switch(topicName){
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
        const {menu} = this.props;
        console.log('menu: ', this.props)
        const topicName = menu.name;
        const isActive = menu.isActive;
        return (
            <li
                className="cnode-nav-item"
                onClick={(e) => this.clickHeaderMenus(topicName)}
                >
                <a 
                    className={isActive ? 'sel-nav' : ''}
                    >
                    {topicName}
                </a>
            </li>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_toggleMenu: (topicName) => dispatch(actions.toggleMenu(topicName)),
        dispatch_getTopics: (sort, page) => dispatch(actions.req_getTopics(sort, page))
    }
}


export default connect(null, mapDispatchToProps)(HeaderMenuItem)


