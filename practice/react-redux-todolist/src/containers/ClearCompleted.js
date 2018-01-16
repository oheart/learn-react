import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class ClearCompleted extends Component{
    render(){
        const { dispatch_clearCompleted } = this.props;
        return (
            <div onClick={dispatch_clearCompleted}>
                ClearCompleted
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_clearCompleted: () => dispatch(actions.clearCompleted())
    }
}

export default connect(null, mapDispatchToProps)(ClearCompleted)