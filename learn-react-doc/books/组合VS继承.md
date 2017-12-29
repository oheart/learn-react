## 组合VS继承
React 具有强大的组合模型，我们建议使用组合而不是继承来复用组件之间的代码。
## 包含关系
一些组件不能提前知道它们的子组件是什么。这对于 Sidebar 或 Dialog 这类通用容器尤其常见。      
我们建议这些组件使用 **children** 属性将子元素直接传递到输出。    
例子： src/components/combination/Contain.js  

虽然不太常见，但有时你可能需要在组件中有多个入口，这种情况下你可以 **使用自己约定的属性** 而不是 children。     
类似 <Contacts /> 和 <Chat /> 这样的 React 元素都是对象，所以你可以像任何其他元素一样传递它们。    
例子： src/components/combination/Entry.js

## 特殊实例
有时我们认为组件是其他组件的特殊实例。例如，我们会说 WelcomeDialog 是 Dialog 的特殊实例。  

在 React 中，这也是通过组合来实现的，通过配置属性用较特殊的组件来渲染较通用的组件。  

例子： src/components/combination/Instance.js  
例子： src/components/combination/Signup.js 


## 那么继承呢？
属性和组合为你提供了以清晰和安全的方式自定义组件的样式和行为所需的所有灵活性。请记住，组件可以接受任意元素，包括
基本数据类型、React元素或函数。      
如果要在组件之间复用UI无关的功能，我们建议将其提取到单独的Javascript模块中。这样可以在不对组件进行扩展的前提下
导入并使用该函数、对象或类。    