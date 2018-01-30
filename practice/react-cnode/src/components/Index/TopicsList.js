import React, {Component} from 'react'
import {connect} from 'react-redux'

import TopicItem from './TopicItem'
import * as actions from '../../actions'
import LoadMore from './LoadMore'

import * as constants from '../../constants'
import queryString from 'query-string'
import {withRouter} from 'react-router-dom'



class TopicsList extends Component{
    componentWillMount(){
        const {dispatch_getTopics, location} = this.props;
        const queryTab = queryString.parse(location.search).tab || '';
        dispatch_getTopics(queryTab, 10, 1)
    }
    render(){
        const {topics_redux} = this.props;
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
        topics_redux: state.topicsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_getTopics: (sort, limit, page) => dispatch(actions.req_getTopics(sort,limit,page))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicsList))