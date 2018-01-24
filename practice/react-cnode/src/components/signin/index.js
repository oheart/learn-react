import React, {Component} from 'react'


import SigninHeader from './SigninHeader'
import SigninMain from './SigninMain'
import CommonFooter from '../common/CommonFooter'


class Signin extends Component{
    render(){
        return (
            <div  className="cnode-content-wrapper">
                <SigninHeader />
                <SigninMain />
                <CommonFooter />
            </div>
        )
    }
}

export default Signin