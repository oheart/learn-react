import React, {Component} from 'react'
import store from './store'

class Two extends Component{
    render(){
        return (
            <button onClick={() => store.dispatch({type: 'DECREMENT'})}>   {/*点击事件，给store发送action*/}
                {store.getState()}
            </button>
        )
    }
}

export default Two