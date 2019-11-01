import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Board from './components/Board';

function App() {
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('/healthcheck');
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	});
	return (
		<div className="App">
			<p>Test</p>
			<Board />
		</div>
	);
}

export default App;
