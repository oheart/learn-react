import React, { Component } from 'react';
import './App.css';
import QuesHeader from './container/QuesHeader.js'
import QuesForm from './container/QuesForm.js'
import QuesList from './container/QuesList.js'
import Utils from './utils/index.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      ques:[
        {
          id: Utils.generateID(),
          title:'产品经理与程序员矛盾的本质是什么？',
          desc:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
          voteCount:10
        },
        {
          id: Utils.generateID(),
          title:'热爱编程是一种怎样的体验？',
          desc:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
          voteCount:8
        },
        {
          id: Utils.generateID(),
          title:'如何学习React？',
          desc:'重点放在学习es6上，理解函数式，理解props 和state ，就入门了',
          voteCount:5
        }
      ],
      addFormDisplay:false
    }
  }
  toggleQuesDisplay(){
    this.setState({
      addFormDisplay: !this.state.addFormDisplay
    })
  }
  addQues(newQues){
    this.setState({
      ques: [...this.state.ques, newQues]
    })
  }
  changeVoteCount(quesItem){
    let ques = [...quesItem,...this.state.ques];
    // 根据voteCount字段排序
    let sortedQues = this.sortQuestion(ques);
    this.setState({
      ques: sortedQues
    })
    
  }
  sortQuestion(ques){
		ques.sort(function(a,b){
			return b.voteCount - a.voteCount
		});
		return ques
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <QuesHeader 
                toggleQuesDisplay={this.toggleQuesDisplay.bind(this)}     
              />
        </div>
        <div className="App-content">
            <QuesForm  
                addFormDisplay={this.state.addFormDisplay} 
                addQues={this.addQues.bind(this)}
                toggleQuesDisplay={this.toggleQuesDisplay.bind(this)}   
                />
            <QuesList 
                ques={this.state.ques}
                changeVoteCount={this.changeVoteCount.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
