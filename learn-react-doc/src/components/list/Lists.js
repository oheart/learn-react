import React, {Component} from 'react'

class ListItem extends Component{
    render(){
        const {value} = this.props;
        return (
            <li>{value}</li>
        )
    }
}

// 单独声明listItems变量并将其包含在JSX中
// class NuberList extends Component{
//     render(){
//         const {numbers} = this.props;
//         const listItems = numbers.map((number) => 
//             <ListItem 
//                 key={number.toString()}
//                 value={number} />
//         )
//         return (
//             <ul>
//                 {listItems}
//             </ul>
//         )
//     }
// }


// 在JSX中嵌入map表达式
class NuberList extends Component{
    render(){
        const {numbers} = this.props;
        return (
            <ul>
                {
                    numbers.map((number) => 
                        <ListItem key={number.toString()}
                            value={number} />
                    )
                }
            </ul>
        )
    }
}

class Lists extends Component{
    render(){
        const numbers = [1, 2, 3, 4, 5];
        return (
            <NuberList numbers={numbers} />
        )
    }
}

export default Lists