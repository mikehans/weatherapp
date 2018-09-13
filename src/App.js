import React from 'react';
import Header from './components/Header';
import Thing from './components/Thing';

class App extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<Thing />
			</div>
		);
	}
}

export default App;