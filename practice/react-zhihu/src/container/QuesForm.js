import React, {Component} from 'react'
import Utils from '../utils/index.js'

class QuesForm extends Component{
    constructor(){
        super();
        this.state = {
            titVal: '',
            descVal: ''
        }
    }
    submitQuesForm(e){
        //阻止表单默认提交
        e.preventDefault();
        
        const titVal = this.state.titVal;
        const descVal = this.state.descVal;

        //如果标题且描述为空时不进行提交操作
        if(!titVal && !descVal) return;

        //调用父组件的添加问题方法
        this.props.addQues({
            id: Utils.generateID(),
            title: titVal,
            desc: descVal,
            voteCount: 0
        });
        // 提交表单后重置表单
        this.setState({
            titVal: '',
            descVal: ''
        })

    }
    handleInputChange(e){
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    render(){
        const {addFormDisplay, toggleQuesDisplay} = this.props;
        //如果addFormDisplay为flase则阻止组件渲染
        if(!addFormDisplay){
            return null;
        }
        return (
            <form  name="addQuestion" onSubmit={this.submitQuesForm.bind(this)}>
                <label>问题：</label>
                <div>
                    <input type="text" placeholder="请输入标题" className="add-ques-input"
                        name="titVal"
                        value={this.state.titVal}
                        onChange={this.handleInputChange.bind(this)} />
                </div>
                <textarea placeholder="请输入问题描述" className="add-ques-input ques-desc-texarea"
                        name="descVal"
                        value={this.state.descVal}
                        onChange={this.handleInputChange.bind(this)} >
                </textarea>
                <div className="add-operate-wrapper">
                    <button className="ques-form-btn confirm-add-ques-btn cursor"
                        onClick={(e) => toggleQuesDisplay()}>取消</button>
                    <button className="ques-form-btn cancel-add-ques-btn cursor">确认</button>
                </div>   
            </form>
        )
    }
}

export default QuesForm