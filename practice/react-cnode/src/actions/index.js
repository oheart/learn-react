import Fetch from '../utils/fetch'
import * as actionTypes from './actionTypes'
import Service from '../utils/service'

export function switchTopics(topics){
    return {
        type: actionTypes.SWITCH_TOPICS,
        topics
    }
}

export function req_getTopics(sort,limit, page){
    return function(dispatch){
        const url = Service.getReqUrl().getTopics;
        return Fetch.getRequest(url, {tab: sort, limit: limit, page: page}, (res) => {
            dispatch(switchTopics(res.data))
        },(error) =>{
            console.log(error)
        });   
    }
}

export function updateTopic(prop){
    return {
        type: actionTypes.UPDATE_TOPIC,
        prop
    }
}






