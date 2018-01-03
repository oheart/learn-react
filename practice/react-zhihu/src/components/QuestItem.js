import React, {Component} from 'react'

class QuesItem extends Component{
    voteUp(e){
        let {changeVoteCount, quesItem} = this.props;
        let voteCount = quesItem.voteCount;
        quesItem.voteCount = parseInt(voteCount, 10) + 1;
        changeVoteCount(quesItem)
        
    }
    voteDown(e){
        let {changeVoteCount,  quesItem} = this.props;
        let voteCount = quesItem.voteCount;
        quesItem.voteCount = parseInt(voteCount, 10) - 1;
        changeVoteCount(quesItem)
    }
    render(){
        const {quesItem} = this.props;
        const title = quesItem.title;
        const desc = quesItem.desc;
        const voteCount = quesItem.voteCount;
     
        return (
            <div className="ques-list-item clear">
                <div className="ques-vote-part fll">
                    <button className="cursor" 
                        onClick={this.voteUp.bind(this)} 
                        >
                        <span>🔼</span><br/>
                        <span>{voteCount}</span>
                    </button>
                    <br />
                    <button  className="cursor" 
                        onClick={this.voteDown.bind(this)}>
                        <span>🔽</span>    
                    </button>
                </div>
                <div  className="ques-list-part">
                    <h4 className="ques-heading">
                    {title}
                    </h4>
                    <p className="ques-content">
                        {desc}
                    </p>
                </div>
            </div>
        )
    }
}

export default QuesItem