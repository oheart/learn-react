import React, {Component} from 'react'
import action from './actions'
import Header from './containers/Header'
import Footer from './containers/Footer'
import TopicsList from './containers/TopicsList'

import './static/style/reset.css'
import './static/style/style.less'
import './static/Iconfont/iconfont.css'


class App extends Component{
    render(){
        return (
            <div>
                <Header />
                <TopicsList />
                <Footer />
            </div>
        )
    }
}

export default App