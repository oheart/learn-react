import React, {Component} from 'react'


class AddQuesBtn extends Component{
    render(){
        const {toggleQuesDisplay} = this.props;
        return (
            <div className="add-ques-btn-wrapper">
                 <button className="add-ques-btn cursor" onClick={(e) => toggleQuesDisplay()}>添加问题</button>
            </div>
        )
    }
}

export default AddQuesBtn