## todos-with-undo
使用create-react-app构建，todos-with-undo例子可以为你的 Redux 状态树中的任何部分提供撤销和重做功能。

## 项目运行
- npm install
- npm start

## 步骤
1. npm install --save redux-undo   &emsp;&emsp;//&nbsp;&nbsp;安装redux-undo
2. 封装 Reducer       &emsp;&emsp;//&nbsp;&nbsp;通过 undoable函数强化reducer, 把计算结果导出
```js
import undoable from 'redux-undo'
......
const undoableTodos = undoable(todos)
export default undoableTodos
```
3. 修改 TodoList  
通过 state.todos.present 访问 state 而不是原来的 state.todos.
```js
const mapStateToProps = (state) => {
    return {
        todos_redux: state.todos.present
    }
}

```
4. 创建一个名为 UndoRedo 的容器组件
* 用 React Redux 的 connect 函数生成容器组件
* 检查 state.todos.past.length 和 state.todos.future.length 来判断是否启用撤销和重做按钮
* 用redux-undo的ActionCreators触发action，不再需要给撤销和重做编写 action creators 
```js
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
```

 
