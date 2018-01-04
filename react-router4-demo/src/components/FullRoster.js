import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class FullRoster extends Component{
    constructor(){
        super();
        this.state = {
            players: [
                { number: 1, name: "Ben Blocker", position: "G" },
                { number: 2, name: "Dave Defender", position: "D" },
                { number: 3, name: "Sam Sweeper", position: "D" },
                { number: 4, name: "Matt Midfielder", position: "M" },
                { number: 5, name: "William Winger", position: "M" },
                { number: 6, name: "Fillipe Forward", position: "F" }
              ]
        }
    }
    render(){
        const players = this.state.players;
        return (
            <div>
                <ul>
                    {
                        players.map((play) => 
                            <li key={play.number}>
                                <Link to={`/roster/${play.number}`}>{play.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default FullRoster