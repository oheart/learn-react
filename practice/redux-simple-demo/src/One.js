import React, {Component} from 'react'
import store from './store'

class One extends Component{
    render(){
        return (
            <button onClick={() => store.dispatch({type: 'INCREMENT'})}>   {/*点击事件，给store发送action*/}
                {store.getState()}      {/* 从store获取数据 */}
            </button>
        )
    }
}

export default One