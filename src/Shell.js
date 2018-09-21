import React from 'react';
//import Header from './components/layout/Header';
import TodayTemperature from './components/temperature/TodayTemperature';

class Shell extends React.Component {
	render(){
		return (
			<div>
				<TodayTemperature loc="Richmond" cur="17" min="9" max="19" />
			</div>
		);
	}
}

export default Shell;
