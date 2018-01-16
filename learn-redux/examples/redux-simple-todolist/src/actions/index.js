import * as actionTypes from './actionTypes'

export function addTodo(text) {
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

export function deleteTodo(id){
    return {
        type: actionTypes.DELETE_TODO,
        id
    }
}

export function toggleAll(allCompleted){
    return {
        type: actionTypes.TOGGLE_ALL,
        allCompleted
    }
}

export function switchFilter(filterName){
    return {
        type: actionTypes.SWITCH_FILTER,
        filterName
    }
}

export function clearCompleted(){
    return {
        type: actionTypes.CLEAR_COMPLETED
    }
}