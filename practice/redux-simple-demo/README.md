## redux-simple-demo
简单的两个计数按钮，主要演示redux的流程，用react和redux实现。

## 目的
巩固redux知识

## 知识点
**Redux 应用只有一个单一的 store**
- createStore => 创建store
- dispatch  =>  更新state
- subscribe => 监听变化重新渲染视图
- getState  =>  获取 state


如果只使用redux，那么流程是这样的（本例中）：

component --> dispatch(action) --> reducer --> subscribe --> getState --> component

## 项目运行
- npm install
- npm start

