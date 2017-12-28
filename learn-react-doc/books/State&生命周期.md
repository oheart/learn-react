## 正确地使用状态
关于 setState() 这里有三件事情需要知道
1. 不要直接更新状态
例如，此代码不会重新渲染组件：
```js
// Wrong
this.state.comment = 'Hello';
```
应当使用setState():
```js
// Correct
this.setState({comment: 'Hello'});
```
构造函数是唯一能够初始化 this.state 的地方。
2. 状态更新可能是异步的
React 可以将多个setState() 调用合并成一个调用来提高性能。  
因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。  
例如，此代码可能无法更新计数器：
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：  
```js
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
上方代码使用了箭头函数，但它也适用于常规函数：
```js
// Correct
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```
3. 状态更新合并
当你调用 setState() 时，React 将你提供的对象合并到当前状态。  
例如，你的状态可能包含一些独立的变量：  
```js
constructor(props){
    super(props);
    this.state = {
        posts: [],
        comments: []
    }
}
```
你可以调用 setState() 独立地更新它们：
```js
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
## 数据自顶向下流动
- 父组件或子组件都不能知道某个组件是有状态还是无状态，并且它们不应该关心某组件是被定义为一个函数还是一个类。       
- 这就是为什么状态通常被称为局部或封装。除了拥有并设置它的组件外，其他组件不可访问。    
- 组件可以选择将其状态作为属性传递给其他子组件。  
- 任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。   
- 如果你想象一个组件树作为属性的瀑布，每个组件的状态就像一个额外的水源，它连接在一个任意点，但也流下来。  
- 在 React 应用程序中，组件是有状态还是无状态被认为是可能随时间而变化的组件的实现细节。 可以在有状态组件中使用无状态组件，反之亦然。
- 例子： src/components/state/Clock.js







