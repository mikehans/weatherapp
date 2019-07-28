import React from 'react';
import parseDate from '../../utils/parseDate';

function Today(props){
	return (
		<div>
			<h2>Observations for {props.data.date ? parseDate(props.data.date) : ''} </h2>
			<p>{props.data.text ? props.data.text: ''}</p>
		</div>
	);
}

export default Today;
