import React from 'react';

function Temperature(props) {
	return (
		<span>
			{props.val} &deg; C
		</span>
	);
}

export default Temperature;
