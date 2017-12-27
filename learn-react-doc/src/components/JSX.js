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