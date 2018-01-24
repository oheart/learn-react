import React, {Component} from 'react'
import {connect} from 'react-redux'
import FooterMenuItem from './FooterMenuItem'

class CommonFooter extends Component{
    render(){
        const {footer_menus_redux} = this.props;
        return (
            <footer className="common-cnode-footer">
                <ul className="cnode-footer-sortlist">
                    {
                            footer_menus_redux.map((menu, index) => 
                                <FooterMenuItem 
                                       key={menu.name}
                                       menu={menu}
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

export default connect(mapStateToProps)(CommonFooter)