import React, {Component} from 'react'
import CommonHeader from '../common/CommonHeader'
import SignoutIcon from './SignoutIcon'


class MsgHeader extends Component{
    render(){
        return (
            <div>
              <CommonHeader 
                  tit="个人中心"
                  right={
                      <SignoutIcon />
                  }
                 />
            </div>
        )
    }
}

export default MsgHeader