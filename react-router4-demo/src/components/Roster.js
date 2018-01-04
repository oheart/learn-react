import React,{Component} from 'react'
import {Switch, Route} from 'react-router'
import FullRoster from './FullRoster'
import Player from './Player'


class Roster extends Component{
    render(){
        return(
           <Switch>
               <Route exact path='/roster' component={FullRoster} />
               <Route path='/roster/:number' component={Player} />
           </Switch>
        )
    }
}

export default Roster