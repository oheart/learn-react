import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class LoadMore extends Component{
    constructor(){
        super();
        this.state = {
            page: 1
        }
    }
    clickLoadMore(){
        const {header_menus_redux, dispatch_getTopics} = this.props;
        const activeHeaderMenus = header_menus_redux.find(menu => menu.isActive);
        const activeTopicName = activeHeaderMenus.name;
        const page = this.state.page + 1;
        this.setState({
            page: page
        })
        switch(activeTopicName){
            case '全部':
                dispatch_getTopics('', page)
                break;
            case '精华':
                dispatch_getTopics('good', page)
                break;
            case '分享':
                dispatch_getTopics('share', page)
                break;
            case '问答':
                dispatch_getTopics('ask', page)
                break;
            case '招聘':
                dispatch_getTopics('job', page)
                break;
            case '测试':
                dispatch_getTopics('dev', page)
                break;
        }
    }
    render(){
        
        return (
            <div className="load-more-container">
                <a 
                    onClick={() => this.clickLoadMore()}>
                    LoadMore...
               </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        header_menus_redux: state.headerMenus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_getTopics: (sort, page) => dispatch(actions.req_getTopics(sort, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore)