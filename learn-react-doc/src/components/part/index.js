import React, {Component} from 'react'
import ExtractPart from './ExtractPart'

class Welcome extends Component{
    render(){
        const { name } = this.props;
        return (
            <h1>hello, {name} </h1>
        )
    }
}

class Part extends Component{
    render(){
        return (
            <div>
                <Welcome name="Sara" />
                <Welcome name="Cahal"/>
                <Welcome name="Edite" /> 

                <ExtractPart />                
            </div>
        )
    }
}

export default Part