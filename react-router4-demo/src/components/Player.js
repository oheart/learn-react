import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Player extends Component{
    render(){
        return (
            <div>
                <h1>
                    player..
                </h1>
                <Link to='/roster'>Back</Link>
            </div>
        )
    }
}

export default Player