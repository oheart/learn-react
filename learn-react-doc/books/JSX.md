## 在 JSX 中使用表达式
你可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的表达式要包含在大括号里。  
例如 2 + 2, user.firstName, 以及 formatName(user) 都是可以使用的。  
```
import React, { Component } from 'react'

class JSX extends Component{
    render(){
        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        }
        function formatName(user){
            return user.firstName + ' ' + user.lastName;
        }
        return (
            <div>
                    Hello, { formatName(user) }!
            </div>
        )
    }
}

export default JSX
```

