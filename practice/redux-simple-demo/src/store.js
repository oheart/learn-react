import {createStore} from 'redux'  //创建store

// 把 state 和 如何改变 state 都整合到一起了
const reducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(reducer)

export default store