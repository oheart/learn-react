import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import FooterIcon from './FooterIcon'
import Service from '../../utils/service'

class FooterMenuItem extends Component{
    render(){
        const User = Service.localItem('User');

        const {menu} = this.props;
        const topicName = menu.name;
        const isActive = menu.isActive;
        let url = '';
        switch(topicName){
            case '首页':
                url = '/';
                break;
            case '发表':
                url = '/posted';
                break;
            case '消息':
                url = '/msg';
                break;
            case '我的':
                if(!User){
                    url = '/signin'
                }else{
                    url = '/mine';
                }
                break;    
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

const mapStateToProps = (state) => {
   return {
        header_menus_redux: state.headerMenus
   }
}


export default withRouter(connect(mapStateToProps)(FooterMenuItem))