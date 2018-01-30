import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import FooterIcon from './FooterIcon'
import Service from '../../utils/service'

class FooterMenuItem extends Component{
    render(){
        const User = Service.localItem('User');
        const {menu} = this.props;
        const topicName = menu.name;
        if(menu.name == '我的' && !User){
            menu.path = '/signin'
        }else if(menu.name == '我的' && User){
            menu.path = '/mine'
        }
        return (
                <li  className='cnode-footer-options'
                >
                    <NavLink exact to={`${menu.path}`} replace
                             activeClassName='sel-footer-options'>
                        <FooterIcon 
                            topicName={topicName}
                            /><br/>
                        <span>{topicName}</span>
                    </NavLink> 
                </li>   
        )
    }
}

export default FooterMenuItem