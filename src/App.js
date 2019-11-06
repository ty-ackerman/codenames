import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import library from './constants/library';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Board from './components/Board';
import Setup from './components/Setup';

function App(props) {
	const [ rules, setRules ] = useState({
		totalCards: 25,
		cardTypes: {
			teamOne: 9,
			teamTwo: 8,
			neutral: 7,
			death: 1
		}
	});

	let history = useHistory();

	const [ activeCards, setActiveCards ] = useState([]);
	const shuffleArray = (array, totalNum) => {
		// This function will take an array, and return the same array in different order
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there are elements left to shuffle...
		while (0 !== currentIndex) {
			// Pick remaining element
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// Swap with current element
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array.slice(0, totalNum);
	};

	const randomizeLibrary = useCallback(
		() => {
			// This function will take the imported library of words, split them into an array, and randomly choose the selected amount of totalCards (as per rules)
			const libraryArray = library.split(' ');
			// Shuffle array of cards (Fisher-Yates Shuffle) and return deck with specified num of cards
			return shuffleArray(libraryArray, rules.totalCards);
		},
		[ rules.totalCards ]
	);

	const assignCardValues = useCallback(
		(cardsArray) => {
			let tempRules = rules.cardTypes;
			let i = 0;
			const cardTypes = Object.keys(tempRules);

			const deck = cardsArray.map((card) => {
				if (!tempRules[cardTypes[i]] > 0) {
					i++;
				}
				tempRules[cardTypes[i]]--;
				return { card, type: cardTypes[i], picked: false };
			});
			return deck;
		},
		[ rules.cardTypes ]
	);

	useEffect(
		() => {
			const deck = assignCardValues(randomizeLibrary());
			setActiveCards(shuffleArray(deck));
		},
		[ assignCardValues, randomizeLibrary ]
	);

	const handleCompleteForm = async (teams) => {
		const deck = assignCardValues(randomizeLibrary());
		setActiveCards(shuffleArray(deck));

		const res = await axios.post('/games/add', { teams, activeCards });

		await history.push(`/game/${res.data.data._id}`);
	};

	return (
		<div className="App">
			<div>
				<Switch>
					<Route path="/game/*" component={Board} />
					<Route exact path="/" render={() => <Setup handleCompleteForm={handleCompleteForm} />} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
