import React, {Component} from 'react'
import {connect} from 'react-redux'
import TopicItem from '../components/TopicItem'

class TopicsList extends Component{
    render(){
        const {topics_redux} = this.props;
        console.log(topics_redux)
        return (
            <main>
               <div className="cnode-topics-list">
                    <TopicItem 
                        topics_redux={topics_redux}
                        />
               </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topics_redux: state.topics
    }
}

export default connect(mapStateToProps)(TopicsList)