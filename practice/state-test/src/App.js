import React, { Component } from 'react';
import SpanPart from './SpanPart'
import BtnPart from './BtnPart'


class App extends Component {
  constructor(){
    super();
    this.state = {
      btnActive: false
    }
  }
  clickSpan(){
    this.setState({
      btnActive: !this.state.btnActive
    })
  }
  render() {
    return (
      <div className="App">
        <SpanPart clickSpan={this.clickSpan.bind(this)}/>
        <BtnPart  btnActive={this.state.btnActive}/>
      </div>
    );
  }
}

export default App;
