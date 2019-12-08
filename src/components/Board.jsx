import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container, Paper } from '@material-ui/core';
import Card from './Card';
import Header from './Header';
import Modal from './CaptainSelect';

export default function Board(props) {
	const [ loading, setLoading ] = useState(true);
	const [ activeCards, setActiveCards ] = useState([]);
	const [ teams, setTeams ] = useState({});
	const [ noCaptain, setNoCaptain ] = useState([]);

	const hash = props.match.params[0];

	const getCurrentGame = useCallback(async (hash) => {
		const { data: { data: { activeCards, teams } } } = await axios.get(`/games/${hash}`);
		setActiveCards(activeCards);
		setTeams(teams);
		setLoading(false);
		getTeamCaptains(teams);
	}, []);

	useEffect(
		() => {
			getCurrentGame(hash);
		},
		[ hash, getCurrentGame ]
	);

	const getTeamCaptains = (teams) => {
		// will filter through list of teams
		// if teams do not have a captain, they will be put into the array
		const teamNames = Object.keys(teams);
		const needsCaptain = teamNames.filter((teamName) => {
			return !teams[teamName].captain;
		});
		setNoCaptain([ needsCaptain ]);
	};

	if (!loading) {
		return (
			<React.Fragment>
				<Header />
				{noCaptain.length > 0 && <Modal setNoCaptain={setNoCaptain} noCaptain={noCaptain} />}
				<Container className="table">
					{activeCards.map((card, key) => {
						return <Card key={key} card={card} />;
					})}
				</Container>
			</React.Fragment>
		);
	}
	return <div>No Boardgame</div>;
}
