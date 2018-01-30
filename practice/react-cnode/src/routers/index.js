import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

import '../static/style/reset.css'
import '../static/style/style.less'
import '../static/Iconfont/iconfont.css'

import Index from '../components/Index'
import Posted from '../components/posted'
import Msg from '../components/msg'
import Signin from '../components/signin'
import Mine from '../components/mine'


class Routers extends Component{
    render(){
        return (     
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact  path='/posted' component={Posted} />
                <Route exact  path='/msg' component={Msg} />
                <Route exact  path='/signin' component={Signin} />
                <Route exact  path='/mine' component={Mine} />
                <Redirect to="/" /> 
            </Switch>
        )
    }
}
 
 export default Routers
