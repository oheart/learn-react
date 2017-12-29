import React, {Component} from 'react'
import ControlComponent from './ControlComponent'
import Textarea from './Textarea'
import Select from './Select'
import MoreForm from './MoreForm'
import UncontrolComponent from './UncontrolComponent'

class Form extends Component{
    render(){
        return (
           <div>
                <ControlComponent />
                <Textarea />
                <Select />
                <MoreForm />
                <UncontrolComponent />
           </div>
        )
    }
}

export default Form