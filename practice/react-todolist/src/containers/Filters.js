import React, {Component} from 'react'

class Filters extends Component{
    render(){
        const {filters, activeFilter} = this.props;
        return (
            <div>
                {
                    filters.map((filterItem, index) => 
                        <span className="cursor"
                                style={{color: (filterItem.isActive ? 'red' : 'black')}}
                                onClick={() => activeFilter(index)}
                            >
                            {filterItem.name}&nbsp;
                        </span>
                    )
                }
            </div>
        )
    }
}

export default Filters