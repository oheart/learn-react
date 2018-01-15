import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class City extends Component{
    render(){
        const {dispatch_weather} = this.props;
        return (
            <div>
               <button onClick={() => dispatch_weather('shanghai')}>上海</button>
               <button onClick={() => dispatch_weather('beijing')}>北京</button>
            </div>
        )
    }
}


const dispatchToProps = (dispatch) => {
    return {
        dispatch_weather: (cityName) => dispatch(actions.reqWeather(cityName))
    }
}

export default connect(null, dispatchToProps)(City)