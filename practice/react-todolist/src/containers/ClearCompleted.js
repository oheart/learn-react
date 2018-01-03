import React, {Component} from 'react'

class ClearCompleted extends Component{
    render(){
        const {clearCompleted} = this.props;
        return (
            <div onClick={clearCompleted}>
                clearCompleted
            </div>
        )
    }
}

export default ClearCompleted