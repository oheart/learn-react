import React, {Component} from 'react'
import {Switch, Route} from 'react-router'
import Home from '../components/Home'
import Roster from '../components/Roster'
import Schedule from '../components/Schedule'


class Main extends Component{
    render(){
        return (
           <main>
               <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route path='/roster' component={Roster}/>
                   <Route path="/schedule" component={Schedule}/>
               </Switch>
           </main>
        )
    }
}

export default Main