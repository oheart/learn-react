import React, { Component } from 'react'

class SpanPart extends Component {
    render(){
        const { clickSpan } = this.props;
        return (
            <span onClick={(e) => clickSpan(e)}>click me&nbsp;&nbsp;</span>
        )
    }
}

export default SpanPart