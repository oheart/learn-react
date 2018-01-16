import React, {Component} from 'react'
import * as actions from '../actions'

class ClearCompleted extends Component{
    render(){
        const {store} = this.props;
        return (
            <div onClick={() => store.dispatch(actions.clearCompleted())}>
                ClearCompleted
            </div>
        )
    }
}

export default ClearCompleted