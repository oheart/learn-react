import * as actionTypes from '../actions/actionTypes'
import utils from '../utils'

const initialTodos = [
    {
        value: "88888888",
        Checked: true,
        ID: utils.generateID()
    },
    {
        value: "bbb",
        Checked: false,
        ID: utils.generateID()
    },
    {
        value: "ccc",
        Checked: false,
        ID: utils.generateID()
    }
];


function todos(todos = initialTodos, action) {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [{
                    value: action.text,
                    Checked: false,
                    ID: utils.generateID()
                },
                ...todos
            ]

        case actionTypes.TOGGLE_TODO:
            return todos.map((todo, index) => {
                if(index === action.todoIndex){
                    return {
                        ...todo,
                        Checked: !todo.Checked
                    }
                }
                return todo;
            })

        case actionTypes.DELETE_TODO:
            return todos.filter((todo, index) => index !== action.todoIndex)

        case actionTypes.TOGGLE_ALL:
            return todos.map(todo => ({...todo, Checked: action.allCompleted}))
        
        case actionTypes.CLEAR_COMPLETED:
            return todos.filter(todo => !todo.Checked)

        default:
            return todos
    }
}


export default todos
