## 组件概念
组件可以将UI切分成一些独立的可复用的部件，这样你就只需专注于构建每一个单独的部件。  
组件从概念上看就像是函数，它可以接受任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。
## 函数定义/类定义组件
1. 使用Javascript函数
```js
function Welcome(props){
    return <h1>Hello, {props.name} </h1>
}
```
2. 使用ES6 class 定义一个组件
```js
class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name} </h1>
    }
}
```
## 组件渲染
在前面，我们遇到的React元素都只是DOM标签：
```js
const element = <div />;
```
然而，React元素也可以是用户自定义的组件：
```js
const element = <Welcome name="Sara" />;
```
## 组合组件
组件可以在它的输出中引用其它组件，这就可以让我们用同一组件来抽象出任意层次的细节。在React应用中，按钮、表单、对话框、整个屏幕的内容等，这些通常都被表示为组件。
例如，我们可以创建一个App组件，用来多次渲染Welcome组件：
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
## 提取组件
可以将组件切分为更小的组件     
例子： src/components/part/ExtractPart.js
## props的只读性
无论是使用函数或是类来声明一个组件，它决不能修改它自己的props。来看这个sum函数：
```js
function sum(a, b) {
  return a + b;
}
```
类似于上面的这种函数称为“纯函数”，它没有改变它自己的输入值，当传入的值相同时，总是会返回相同的结果。        
所有的React组件必须像纯函数那样使用它们的props。  
与之相对的是非纯函数，它会改变它自身的输入值：  
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```
所有的React组件必须像纯函数那样使用它们的props。


 


