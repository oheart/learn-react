import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ActionCreators as UndoActionCreators} from 'redux-undo'

class UndoRedo extends Component{
    render(){
        const {canUndo, canRedo, onUndo, onRedo} = this.props;
        return (
            <p>
                <button
                     onClick={(e) => onUndo()}
                     disabled={!canUndo}>
                    Undo
                </button>
                <button
                     onClick={(e) => onRedo()} 
                     disabled={!canRedo}>
                    Redo
                </button>
            </p>
        )
    }
}

const mapStateToProps = (state) => {
   return {
        canUndo: state.todos.past.length > 0,
        canRedo: state.todos.future.length > 0
   }
}

const mapDispatchToProps = ({
        onUndo: UndoActionCreators.undo,
        onRedo: UndoActionCreators.redo
})
  

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo)