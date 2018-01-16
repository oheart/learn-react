## react-redux-todolist
简单的todolist，用react、redux、react-redux实现。

## 目的
巩固react/redux/react-redux知识

## 项目运行
- npm install
- npm start


## 知识点
如果只使用redux，那么流程是这样的：    

component --> dispatch(action) --> reducer --> subscribe --> getState --> component

用了react-redux之后流程是这样的 (本例中)：    

component --> actionCreator(data) --> reducer --> component
