import React, { Component } from 'react'

class BtnPart extends Component {
    render() {
       var { btnActive } = this.props;
       return (
           <button style={{background: btnActive ? 'red' : ''}}>button</button>
       )
     }
}

export default BtnPart