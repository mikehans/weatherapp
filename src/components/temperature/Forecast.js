import React from 'react';
import Location from './Location';
import MinMax from './MinMax';
import Temperature from './Temperature';
import parseDate from '../../utils/parseDate';

function Forecast(props) {
	return (
		<div>
			<h2>Forecast for {props.data.date ? parseDate(props.data.date) : 'unknown'}</h2>
			<p>{props.data.text ? props.data.text : ''}</p>
			<MinMax min={props.data.minTemp ? props.data.minTemp : '?'} 
					max={props.data.maxTemp ? props.data.maxTemp : '?'} />
		</div>
	);
}

export default Forecast;
