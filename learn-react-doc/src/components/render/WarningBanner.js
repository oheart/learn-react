import React, {Component} from 'react'

class WarningPart extends Component{
    render(){
        const {warn} = this.props;
        // 让 render 方法返回 null阻止组件渲染
        if(!warn) return null;
        return (
            <div className="warning">
               Warning!
            </div>
        )
    }
}

class Page extends Component{
    constructor(){
        super();
        this.state = {
            showWarning: true
        }
    }
    handleToggleClick(){
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }))
    }
    render(){
        const showWarning = this.state.showWarning;
        return (
            <div>
                <WarningPart warn={showWarning}/>
                <button onClick={this.handleToggleClick.bind(this)}>
                        { showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}


class WarningBanner extends Component{
    render(){
        return (
            <div>
               <Page />
            </div>
        )
    }
}

export default WarningBanner