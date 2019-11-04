import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Board from './components/Board';
import Setup from './components/Setup';

function App() {
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('/games');
				console.log(...response.data.data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	});
	return (
		<div className="App">
			{/* <Board /> */}
			<Setup />
		</div>
	);
}

export default App;
