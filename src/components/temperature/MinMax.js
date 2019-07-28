import React from 'react';
import Temperature from './Temperature';

export default function MinMax(props) {
	return (
		<div>
		Min/Max: <Temperature val={props.min} /> / <Temperature val={props.max} />
		</div>
	);
}
