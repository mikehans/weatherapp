import React from 'react';
import Temperature from './Temperature';

export default function MinMax(props) {
	return (
		<div>
		<Temperature val={props.min} /> / <Temperature val={props.max} />
		</div>
	);
}
