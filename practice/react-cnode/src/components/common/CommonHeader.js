import React, {Component} from 'react'

class CommonHeader extends Component{
    render(){
        const {tit, children} = this.props;
        return (
            <div className="common-cnode-header">
               {children}
               <div className="header-txt-part">
                    <span>{tit}</span>
               </div>
            </div>
        )
    }
}

export default CommonHeader