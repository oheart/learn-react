import React, {Component} from 'react'
import PlayerAPI from '../api'
import {Link} from 'react-router-dom'

class Player extends Component{
    render(){
        // console.log('match: ',this.props.match)
        const player = PlayerAPI.get(
            parseInt(this.props.match.params.number, 10)
        )
        if(!player){
            return <div>Sorry, but the player was not found.</div>
        }
        return (
            <div>
               <h1>{player.name} (#{Player.number})</h1>
               <h2>Position: {player.position}</h2>
               <Link to='/roster'>Back</Link>
            </div>
        )
    }
}

export default Player