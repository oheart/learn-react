import * as actionTypes from '../actions/actionTypes'
import {combineReducers} from 'redux'

const initialWeather = 'default Weather';

function weather(weather = initialWeather, action){
    switch(action.type){
        case actionTypes.UPDATEWEATHER:
            return action.weather
        default:
            return weather
    }
}

const reducers = combineReducers({
    weather
})

export default reducers