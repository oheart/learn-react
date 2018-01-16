import * as actionTypes from '../actions/actionTypes'
import  { filterTypes } from '../constants'

const initialFilters = [
    {
        name: filterTypes.All,
        isActive: true
    },
    {
        name: filterTypes.Active,
        isActive: false
    },
    {
        name: filterTypes.Completed,
        isActive: false
    }
]

function filters(filters = initialFilters, action){
    switch(action.type){
        case actionTypes.SWITCH_FILTER:
            return filters.map(filter => {
                if(filter.name === action.filterName){
                    return {...filter, isActive: true}
                }  
                return {
                    ...filter,
                    isActive: false
                }
            })
        default:
            return filters
    }
}

export default filters
