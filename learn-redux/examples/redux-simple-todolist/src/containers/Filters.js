import React, {Component} from 'react'
import * as actions from '../actions'

class Filters extends Component{
    render(){
        const {store} = this.props;
        const filters_redux = store.getState().filters;

        return (
            <div>
                {
                    filters_redux.map((filter, index) => 
                        <span
                            key={filter.name}
                            style={{color:(filter.isActive ? 'red' : '#000')}}
                            onClick={() => store.dispatch(actions.switchFilter(filter.name))}
                            >
                            {filter.name}
                            {' '}
                        </span>
                    )
                }
            </div>
        )
    }
}

export default Filters