import utils from '../utils'
import * as actionTypes from '../actions/actionTypes'

const initialTodos = [
    {
        ID: utils.generateID(),
        value: "88888888",
        completed: true
      },
      {
        ID: utils.generateID(),
        value: "bbb",
        completed: false
      },
      {
        ID: utils.generateID(),
        value: "ccc",
        completed: false
      }
];


function todos(todos = initialTodos, action){
    switch(action.type){
        case actionTypes.ADD_TODO:
            return [
                ...todos,
                {
                    ID: utils.generateID(),
                    value: action.text,
                    completed: false
                }
            ]

        case actionTypes.TOGGLE_TODO:
            return todos.map(todo => 
                (todo.ID === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
            
        case actionTypes.DELETE_TODO:
            return todos.filter((todo) => todo.ID !== action.id)

        case actionTypes.TOGGLE_ALL:
            return todos.map(todo => 
                ({...todo, completed: action.allCompleted})
            )
        
        case actionTypes.CLEAR_COMPLETED:
            return todos.filter(todo => !todo.completed)

        default:
            return todos
    }
}


export default todos