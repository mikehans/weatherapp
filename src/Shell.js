import React from 'react';
//import Header from './components/layout/Header';
import Forecast from './components/temperature/Forecast';
import Today from './components/temperature/Today';

class Shell extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };
	}

	componentDidMount() {
		fetch('http://localhost:3000/forecast')
			.then((response) => {
				return response.json();
			})
			.then(data => {
				this.setState({ ...data });
			});
	}

	render() {
		return (
			<div>
				<h1>Weather for {this.state.description}</h1>
				{this.state['forecast-period-0'] ? <Today data={this.state["forecast-period-0"]} /> : ''}
				{this.state['forecast-period-1'] ? <Forecast data={this.state["forecast-period-1"]} /> : ''}
				{this.state['forecast-period-2'] ? <Forecast data={this.state["forecast-period-2"]} /> : ''}
				{this.state['forecast-period-3'] ? <Forecast data={this.state["forecast-period-3"]} /> : ''}
				{this.state['forecast-period-4'] ? <Forecast data={this.state["forecast-period-4"]} /> : ''}
				{this.state['forecast-period-5'] ? <Forecast data={this.state["forecast-period-5"]} /> : ''}
				{this.state['forecast-period-6'] ? <Forecast data={this.state["forecast-period-6"]} /> : ''}
				{this.state['forecast-period-7'] ? <Forecast data={this.state["forecast-period-7"]} /> : ''}
			</div>
		);
	}
}

export default Shell;
