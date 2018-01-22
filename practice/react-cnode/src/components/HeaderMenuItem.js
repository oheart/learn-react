import React, {Component} from 'react'

class HeaderMenuItem extends Component{
    componentDidMount(){
        const {dispatch_toggleMenu, dispatch_getTopics, topicName} = this.props;
        switch(topicName){
            case '全部': 
            dispatch_getTopics('')
            break;
        }
    }
    switchActiveMenu(index){
        return index === this.props.currentIndex ? 'sel-nav' : ''
    }
    clickHeaderMenus(topicName, index){
        const {dispatch_toggleMenu, setCurrentIndex, dispatch_getTopics} = this.props;
        setCurrentIndex(index)
        dispatch_toggleMenu(topicName)
        switch(topicName){
            case '全部':
                dispatch_getTopics('')
                break;
            case '精华':
                dispatch_getTopics('good')
                break;
            case '分享':
                dispatch_getTopics('share')
                break;
            case '问答':
                dispatch_getTopics('ask')
                break;
            case '招聘':
                dispatch_getTopics('job')
            break;
        }
       
    }
    render(){
        const {topicName, index} = this.props;
        return (
            <li
                className="cnode-nav-item"
                onClick={(e) => this.clickHeaderMenus(topicName, index)}
                >
                <a 
                    className={this.switchActiveMenu(index)}
                    >
                    {topicName}
                </a>
            </li>
        )
    }
}

export default HeaderMenuItem


