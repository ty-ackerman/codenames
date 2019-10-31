import React, { useState, useEffect, useCallback } from 'react';
import library from '../constants/library';

// This component will split the data from the library into a random array of words, and assign values corresponding to teams colours + neutral + death (9/8/7/1)

export default function Board() {
	const [ settings, setSettings ] = useState({
		totalCards: 25,
		cardTypes: {
			teamOne: 9,
			teamTwo: 8,
			neutral: 7,
			death: 1
		}
	});
	const [ activeCards, setActiveCards ] = useState([]);

	const shuffleArray = (array, totalNum) => {
		// This function will take an array, and return the same array in different order
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there are elements left to shuffle...
		while (0 != currentIndex) {
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

	const randomizeLibrary = () => {
		// This function will take the imported library of words, split them into an array, and randomly choose the selected amount of totalCards (as per settings)
		const libraryArray = library.split(' ');
		// Shuffle array of cards (Fisher-Yates Shuffle) and return deck with specified num of cards
		return shuffleArray(libraryArray, settings.totalCards);
	};

	const assignCardValues = (cardsArray) => {
		let tempSettings = settings.cardTypes;
		let i = 0;
		const cardTypes = Object.keys(tempSettings);

		const deck = cardsArray.map((card) => {
			if (!tempSettings[cardTypes[i]] > 0) {
				i++;
			}
			tempSettings[cardTypes[i]]--;
			return { card, type: cardTypes[i] };
		});
		console.log(deck);
	};

	useEffect(
		useCallback(() => {
			// Randomize list of array
			console.log(assignCardValues(randomizeLibrary()));
			// Assign values to array
		}),
		[]
	);

	// return <div>{testArray.map((word) => <p>{word}</p>)}</div>;
	return <div>{'hellllo'}</div>;
}
