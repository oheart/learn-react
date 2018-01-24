import React, {Component} from 'react'
import Service from '../../utils/service'
import SigninTipMsg from '../../components/signin/SigninTipMsg'
import MsgContent from './MsgContent'

class MsgMain extends Component{
    render(){
        const User = Service.localItem('User');
        let Msg = null;
        if(!User){
            Msg =  <SigninTipMsg />
        }else{
            Msg = <MsgContent />
        }

        return (
            <main className="cnode-main-wrapper">
                 <div>
                    {Msg}
                </div>
            </main>
        )
    }
}

export default MsgMain