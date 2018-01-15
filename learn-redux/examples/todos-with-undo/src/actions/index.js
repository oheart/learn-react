import * as actionTypes from './actionTypes'

export function addTodo(text){
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}

export function toggleTodo(id){
    return {
        type: actionTypes.TOGGLE_TODO,
        id
    }
}

export function switchFilter(filterName){
    return {
        type: actionTypes.SWITCH_FILTER,
        filterName
    }
}
