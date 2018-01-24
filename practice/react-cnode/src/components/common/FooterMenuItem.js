import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import FooterIcon from './FooterIcon'
import Service from '../../utils/service'

class FooterMenuItem extends Component{
    clickFooterMenus(topicName){
        // const {dispatch_toggleMenu, header_menus_redux, url} = this.props;
        // console.log('props: ', this.props)
        // dispatch_toggleMenu(topicName)
        //如果是首页回到全部默认选中状态
        // if(url === '/'){
        //     dispatch_toggleMenu(topicName)
        //     dispatch_toggleMenu('全部')
        // }

        const {dispatch_toggleMenu, url} = this.props;
        console.log('props: .....', this.props)
    }
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
                    console.log('signin')
                    url = '/signin'
                }else{
                    console.log('mine')
                    url = '/mine';
                }
                break;    
        }
        return (
            <li  className={isActive ? 'cnode-footer-options sel-footer-options' : 'cnode-footer-options'}
                 onClick={(e) => this.clickFooterMenus(topicName)}
                >
                    <Link to={url}>
                        <FooterIcon 
                            topicName={topicName}
                            /><br/>
                        <span>{topicName}</span>
                    </Link> 
            </li> 
        )
    }
}

const mapStateToProps = (state) => {
   return {
        header_menus_redux: state.headerMenus
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_toggleMenu: (topicName) => dispatch(actions.toggleMenu(topicName))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FooterMenuItem)