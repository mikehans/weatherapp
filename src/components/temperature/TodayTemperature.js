import React from 'react';
import Location from './Location';
import MinMax from './MinMax';
import Temperature from './Temperature';

class TodayTemperature extends React.Component {
	render() {
		return (
			<div>
				<Location loc={this.props.loc} />
				<Temperature val={this.props.cur} />
				<MinMax min={this.props.min} max={this.props.max} />
			</div>
		);
	}
}

export default TodayTemperature;
