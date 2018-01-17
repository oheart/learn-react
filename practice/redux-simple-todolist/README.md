## redux-simple-todolist
简单的todolist，用react、redux实现，，也体现了redux的整个流程。


## 目的
巩固react/redux知识

## 项目运行
- npm install
- npm start


## 知识点
如果只使用redux，那么流程是这样的（本例中）：

component --> dispatch(action) --> reducer --> subscribe --> getState --> component


## 扩展
用了react-redux之后流程是这样的：  

component --> actionCreator(data) --> reducer --> component    

store的三大功能：dispatch，subscribe，getState都不需要手动来写了。react-redux帮我们做了这些，同时它提供了两个好基友Provider和connect。
