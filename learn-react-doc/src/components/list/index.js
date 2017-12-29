import React,{Component} from 'react'
import Lists from './Lists'
import Blogs from './Blogs'

class List extends Component{
    render(){
        return (
            <div>
                <Lists />
                <Blogs />
            </div>
        )
    }
}

export default List