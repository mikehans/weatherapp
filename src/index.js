import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './Shell';
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('#app');
ReactDOM.render(<Shell />, root);
registerServiceWorker();
