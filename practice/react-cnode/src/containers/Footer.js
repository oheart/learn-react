import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import FooterMenuItem from '../components/FooterMenuItem'

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            currentIndex: 0
        }
    }
    setCurrentIndex(index){
        this.setState({
            currentIndex: index
        })
    }
    render(){
        const {footer_menus_redux, dispatch_toggleMenu} = this.props;
        return (
            <footer className="common-cnode-footer">
                <ul className="cnode-footer-sortlist">
                    {
                            footer_menus_redux.map((menu, index) => 
                                <FooterMenuItem 
                                       key={menu.name}
                                       topicName={menu.name}
                                       index={index}
                                       dispatch_toggleMenu={dispatch_toggleMenu}
                                       currentIndex={this.state.currentIndex}
                                       setCurrentIndex={(e) => this.setCurrentIndex(index)}
                                    />
                            )
                    }
                </ul>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        footer_menus_redux: state.footerMenus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_toggleMenu: (topicName) => dispatch(actions.toggleMenu(topicName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)