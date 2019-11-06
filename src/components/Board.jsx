import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios"

export default function Board(props) {
	const [loading, setLoading] = useState(true)
	const [activeCards, setActiveCards] = useState([]);
	const [teams, setTeams] = useState({})

	const hash = props.match.params[0]

	const getCurrentGame = async (hash) => {
		const {data: {data: {activeCards, teams}}} = await axios.get(`/games/${hash}`);
		setActiveCards(activeCards)
		setTeams(teams)
		setLoading(false)
	}

	useEffect(
		() => {
			getCurrentGame(hash);
		}, [hash]
	);

		if (!loading) {
			return <div>BoardGame</div>
		}
		return <div>No Boardgame</div>
}
