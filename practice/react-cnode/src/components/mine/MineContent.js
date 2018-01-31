import React, {Component} from 'react'
import Service from '../../utils/service'
import Fetch from '../../utils/fetch'
import UserInfoCenter from './UserInfoCenter'
import UserTopicReply from './UserTopicReply'

class MineContent extends Component{
    constructor(){
        super();
        this.state = {
            userInfo: []
        }
    }
    req_getUserInfo(loginname){
        Fetch.getRequest('/api/v1/user/' + loginname, null ,(res) => {
            this.setState({
                userInfo: res.data
            })
        }, (error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        const User = Service.localItem('User');
        const loginname = JSON.parse(User).loginname;
        this.req_getUserInfo(loginname);
    }
    render(){
        const userInfo = this.state.userInfo;
        //userInfo未获取数据之前阻止组件渲染
        if(userInfo.length == 0){
            return null;
        }
        return (
            <main className="cnode-main-wrapper">
                <div className="user-info-wrapper">
                    <UserInfoCenter 
                            userInfo = {userInfo}
                        />
                    <UserTopicReply 
                            userInfo = {userInfo}
                        />
                </div>
            </main>
        )
    }
}

export default MineContent