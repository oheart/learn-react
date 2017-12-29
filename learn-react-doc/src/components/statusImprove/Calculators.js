import React, {Component} from 'react'

class BoilingVerdict extends Component{
    render(){
        const {celsius} = this.props;
        if(celsius >= 100){
            return <p>The water would boil.</p>
        }
        return <p>The water would not boil.</p>
    }
}

class TemperatureInput extends Component{
    constructor(){
        super();
        this.state = {
            temperature: ''
        }
    }
    handleChange(e){
        const {onTemperatureChange} = this.props;
        onTemperatureChange(e.target.value)
   
    }
    render(){
        const {temperature} = this.props;
        const {scale} = this.props;
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input 
                    value={temperature}
                    onChange={(e) => this.handleChange(e)}
                    />
            </fieldset>
        )
    }
}


 

class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    handleCelsiusChange(temperature){
        this.setState({
            scale: 'c',
            temperature
        })
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale: 'f',
            temperature
        })
    }
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }   
    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
      
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;


        return (
            <div>
                <TemperatureInput 
                        scale="c" 
                        temperature={celsius}
                        onTemperatureChange={this.handleCelsiusChange.bind(this)}
                        />
                <TemperatureInput 
                        scale="f" 
                        temperature={fahrenheit}
                        onTemperatureChange={this.handleFahrenheitChange.bind(this)}
                        />
                <BoilingVerdict 
                        celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

class Calculators extends Component{
    render(){
        return (
            <div className="mt10">
                <Calculator />
            </div>
        )
    }
}

export default Calculators