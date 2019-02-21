import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'React-Router-DOM';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, // Glue this
	document.getElementById('app') // to this
);