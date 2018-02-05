import React, {Component} from 'react'
import TopicDetail from './TopicDetail'
import TopicReplyDetail from './TopicReplyDetail'
import {withRouter} from 'react-router-dom'
import Fetch from '../../utils/fetch'
import Service from '../../utils/service'


class TopicMain extends Component{
    constructor(){
        super();
        this.state = {
            detailData: {}
        }
    }
    req_getTopicDetails(){
        const {match} = this.props;
        const topicId = match.params.topicId;
        Fetch.getRequest('/api/v1/topic/' + topicId, null , (res) => {
            console.log(res)
            console.log('topicDetail.....')
            if(res.success){
                this.setState({
                    detailData: res.data
                })              
            }
        },(error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.req_getTopicDetails()
    }
    render(){
        const {detailData} = this.state;
        //如果是空对象不进行组件渲染
        if(Service.isEmptyObj(detailData)){
            return null;
        }
        
        return (
            <div className="main-part-wrapper">
                   <TopicDetail 
                        detailData = {detailData}
                       />
                    <TopicReplyDetail
                        detailData = {detailData}
                        req_getTopicDetails= {(e) => this.req_getTopicDetails()}
                     /> 
            </div>
        )
    }
}

export default withRouter(TopicMain)