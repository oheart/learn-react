import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import HeaderMenuItem from '../components/HeaderMenuItem'


class Header extends Component{
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
        const {header_menus_redux, dispatch_toggleMenu, dispatch_getTopics} = this.props;

        return (
            <header className="cnode-common-header">
                <nav className="cnode-nav">
                    <ul className="cnode-nav-list">
                        {
                            header_menus_redux.map((menu, index) => 
                                <HeaderMenuItem 
                                       key={menu.name}
                                       topicName={menu.name}
                                       index={index}
                                       dispatch_toggleMenu={dispatch_toggleMenu}
                                       dispatch_getTopics={dispatch_getTopics}
                                       currentIndex={this.state.currentIndex}
                                       setCurrentIndex={(e) => this.setCurrentIndex(index)}
                                    />
                            )
                        }
                    </ul>
                </nav>
            </header>
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
        dispatch_toggleMenu: (topicName) => dispatch(actions.toggleMenu(topicName)),
        dispatch_getTopics: (sort) => dispatch(actions.req_getTopics(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)