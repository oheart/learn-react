import React, {Component} from 'react'
import ConditionalRender from './ConditionalRender'
import AndRender from './AndRender'
import WarningBanner from './WarningBanner'

class Render extends Component{
    render(){
        return (
            <div>
                <ConditionalRender />
                <AndRender />
                <WarningBanner />
            </div>
        )
    }
}

export default Render