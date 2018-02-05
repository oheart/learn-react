import {combineReducers} from 'redux'
import topicsList from './topicsList'
import updateTopic from './updateTopic'

const reducers = combineReducers({
    topicsList,
    updateTopic
})

export default reducers