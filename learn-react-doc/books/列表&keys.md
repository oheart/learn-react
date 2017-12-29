## Keys
Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。     
例子：src/components/list/Lists.js

## 元素的key在他的兄弟元素之间应该唯一
数组元素中使用的key在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的键。      
例子：src/components/list/Blogs.js
