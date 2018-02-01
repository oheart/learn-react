import Fetch from '../utils/fetch'

// Fetch.getRequest("https://phodal.github.io/growth-api-gitbook/api.json", null, (res) => {
//     console.log(res);
// },(error) =>{
//     console.log(error)
// });

import * as actionTypes from './actionTypes'

export function switchTopics(topics){
    return {
        type: actionTypes.SWITCH_TOPICS,
        topics
    }
}

export function req_getTopics(sort,limit, page){
    return function(dispatch){
        return Fetch.getRequest("/api/v1/topics", {tab: sort, limit: limit, page: page}, (res) => {
            // console.log(res.data);
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






