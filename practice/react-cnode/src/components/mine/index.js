import React, {Component} from 'react'


import MineHeader from './MineHeader'
import MineMain from './MineMain'
import CommonFooter from '../common/CommonFooter'


class Mine extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                <MineHeader />
                <MineMain />
                <CommonFooter />
            </div>
        )
    }
}

export default Mine