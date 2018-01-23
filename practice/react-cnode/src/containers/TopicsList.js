import React, {Component} from 'react'
import {connect} from 'react-redux'
import TopicItem from '../components/TopicItem'
import * as actions from '../actions'

class TopicsList extends Component{
    componentWillMount(){
        const { dispatch_getTopics } = this.props;
        console.log(this.props)
        console.log(dispatch_getTopics)
        dispatch_getTopics('')
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
        dispatch_getTopics: (sort) => dispatch(actions.req_getTopics(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList)