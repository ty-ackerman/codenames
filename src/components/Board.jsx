import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Card from './Card';

export default function Board(props) {
	const [ loading, setLoading ] = useState(true);
	const [ activeCards, setActiveCards ] = useState([]);
	const [ teams, setTeams ] = useState({});

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
			<Container className="table">
				{activeCards.map((card, key) => {
					return <Card key={key} card={card} />;
				})}
			</Container>
		);
	}
	return <div>No Boardgame</div>;
}
