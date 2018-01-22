import React, {Component} from 'react'
import FooterIcon from './FooterIcon'

class FooterMenuItem extends Component{
    switchActiveMenu(index){
        return index === this.props.currentIndex ? 'cnode-footer-options sel-footer-options' : 'cnode-footer-options'
    }
    clickFooterMenus(topicName, index){
        console.log('haha')
        const {dispatch_toggleMenu, setCurrentIndex} = this.props;
        setCurrentIndex(index)
        dispatch_toggleMenu(topicName)
    }
    render(){
        const {topicName, index} = this.props;
        return (
            <li  className={this.switchActiveMenu(index)}
                 onClick={(e) => this.clickFooterMenus(topicName, index)}
                >
                    <FooterIcon 
                          topicName={topicName}
                        /><br/>
                    <span> {topicName}</span>
            </li> 
        )
    }
}

export default FooterMenuItem