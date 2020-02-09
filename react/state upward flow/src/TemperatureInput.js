import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
   // this.state = {temperature: ''};
  }

  handleChange(e) {
		// this.setState({temperature: e.target.value});
		this.props.onTemperatureChange(e.target.value);
  }

  render() {
		// const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
export default TemperatureInput











