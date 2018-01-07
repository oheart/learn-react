import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component{
    incrementIfOdd(){
        if(this.props.value % 2 !== 0){
            this.props.onIncrement()
        }
    }
    incrementIfAsync(){
        setTimeout(this.props.onIncrement, 1000)
    }
    render(){
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <p>
                Clicked:  {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={(e) => this.incrementIfOdd()}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={(e) => this.incrementIfAsync()}>
                    Increment async 
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter