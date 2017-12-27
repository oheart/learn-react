import React, { Component } from 'react'

// 在JSX中使用表达式
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