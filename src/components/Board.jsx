import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper } from '@material-ui/core';
import Card from './Card';
import Header from './Header';



export default function Board(props) {
	const [ loading, setLoading ] = useState(true);
	const [ activeCards, setActiveCards ] = useState([]);
	const [ , setTeams ] = useState({});

	const hash = props.match.params[0];

	const getCurrentGame = async (hash) => {
		const { data: { data: { activeCards, teams } } } = await axios.get(`/games/${hash}`);
		setActiveCards(activeCards);
		setTeams(teams);
		setLoading(false);
	};

	useEffect(
		() => {
			getCurrentGame(hash);
		},
		[ hash ]
	);

	if (!loading) {
		return (
			<>
			<Header/>
			<Container className="table">
				{activeCards.map((card, key) => {
					return <Card key={key} card={card} />;
				})}
			</Container>
			</>
		);
	}
	return <div>No Boardgame</div>;
}
