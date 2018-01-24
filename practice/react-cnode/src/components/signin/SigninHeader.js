import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'

class SigninHeader extends Component{
    render(){
        return (
            <div>
               <CommonHeader 
                    tit="登录" 
                    >
                   <i className="iconfont">&#xe60f;</i>
              </CommonHeader>
            </div>
        )
    }
}

export default SigninHeader