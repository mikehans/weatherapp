export const schema = {
	'type': 'object',
	'properties': {
		'issueDateLocal': {
			'type': 'string',
			'description': 'Date the forecast was issued'
		},
		'type': {
			'type': 'string'
		},
		'nextUpdateLocal': {
			'type': 'date'
		},
		'forecasts': {
			'type': 'object',
			'properties': {
				'location': {
					'type': 'string',
					'faker': 'address.city'
				},
				'forecast-period-0': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						}
					},
					'required': ['date', 'text']
				},
				'forecast-period-1': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'forecast-period-2': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'forecast-period-3': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'forecast-period-4': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'forecast-period-5': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'forecast-period-6': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'forecast-period-7': {
					'type': 'object',
					'properties': {
						'date': {
							'type': 'date'
						},
						'text': {
							'type': 'string',
							'faker': 'lorem.sentence'
						},
						'minTemp': {
							'type': 'number',
							'minimum': 5,
							'maximum': 11
						},
						'maxTemp': {
							'type': 'number',
							'minimum': 11,
							'maximum': 18
						}
					},
					'required': ['date', 'text', 'minTemp', 'maxTemp']
				},
				'required': ['location', 'forecast-period-0', 
							'forecast-period-1', 'forecast-period-2', 
							'forecast-period-3', 'forecast-period-4', 
							'forecast-period-5', 'forecast-period-6', 'forecast-period-7']
			}
		}
	},
	'required': ['issueDateLocal', 'type', 'nextUpdateLocal', 'forecasts']
};
