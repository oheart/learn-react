import React, {Component} from 'react'
import QuesItem from '../components/QuestItem.js'

class QuesList extends Component{
    render(){
        const {ques, changeVoteCount} = this.props;
        return (
            <div className="ques-list-container">  
                {
                    ques.map(function(item){
                        return <QuesItem 
                                    key={item.id}
                                    quesItem={item}
                                    changeVoteCount={changeVoteCount}
                                />
                    })
                }
            </div>
        )
    }
}

export default QuesList