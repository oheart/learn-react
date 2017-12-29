import React, {Component} from 'react'
import Contain from './Contain'
import Entry from './Entry'
import Instance from './Instance'
import Signup from './Signup'

class Combination extends Component{
    render(){
        return (
            <div>
                <Contain />
                <Entry />
                <Instance />
                <Signup />
            </div>
        )
    }
}

export default Combination