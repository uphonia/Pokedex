import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './base.css'
import './index.css'
import {AppProvider} from './context'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<AppProvider>
				<App />
			</AppProvider>
		<HashRouter/>
	</React.StrictMode>,
	document.getElementById('root')
);
