import React, {Component} from 'react'
import PlayerAPI from '../api'
import {Link} from 'react-router-dom'


class FullRoster extends Component{
    render(){
        const players = PlayerAPI.all();
        return (
            <div>
               <ul>
                   {
                        players.map((item) => 
                            <li key={item.number}>
                                <Link to={`/roster/${item.number}`}>{item.name}</Link>
                            </li>
                        )
                   }
               </ul>
            </div>
        )
    }
}

export default FullRoster