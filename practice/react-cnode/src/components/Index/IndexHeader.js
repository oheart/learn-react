import React, {Component} from 'react'
import {connect} from 'react-redux'
import HeaderMenuItem from './HeaderMenuItem'


class IndexHeader extends Component{
    render(){
        const {header_menus_redux} = this.props;

        return (
            <header className="index-menu-header">
                <nav className="cnode-nav">
                    <ul className="cnode-nav-list">
                        {
                            header_menus_redux.map((menu, index) => 
                                <HeaderMenuItem 
                                       key={menu.name}
                                       menu={menu}
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

export default connect(mapStateToProps)(IndexHeader)



