import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class Filters extends Component{
    render(){
        const {filters_redux, dispatch_switchFilter} = this.props;

        return (
            <p>
               {
                   filters_redux.map((filter, index) => 
                        filter.isActive 
                            ?  <span 
                                    key={filter.name}
                                    onClick={() => dispatch_switchFilter(filter.name)} 
                                    >
                                  {filter.name}{' '}
                               </span> 
                            :  <a  href="#"
                                    key={filter.name}
                                    onClick={() => dispatch_switchFilter(filter.name)} 
                                    >
                                  {filter.name}{' '}
                               </a>                   
                   )
               }

            </p>
        )
    }
}

const mapStateToProps = (state) => {
   return {
        filters_redux: state.filters
   }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch_switchFilter: (filterName) => dispatch(actions.switchFilter(filterName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)