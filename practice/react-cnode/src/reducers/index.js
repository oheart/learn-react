import {combineReducers} from 'redux'
import headerMenus from './headerMenus'
import footerMenus from './footerMenus'
import topicsList from './topicsList'


const reducers = combineReducers({
    headerMenus,
    footerMenus,
    topicsList
})


export default reducers