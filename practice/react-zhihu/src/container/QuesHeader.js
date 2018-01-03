import React, {Component} from 'react'
import AddQuesBtn from '../components/AddQuesBtn.js'

class QuesHeader extends Component{
    render(){
        const {toggleQuesDisplay} = this.props;
        return (
            <div className="ques-hd-container">
                <h1 className="ques-topic-tit">React问答</h1>
                <AddQuesBtn toggleQuesDisplay={toggleQuesDisplay}/>
            </div>
        )
    }
}

export default QuesHeader