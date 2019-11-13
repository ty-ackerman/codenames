import React, { useReducer } from 'react';

export default function Card(props) {
	const { card, type, picked } = props.card;

	return (
		<div onClick={() => console.log(props.card)} className={`card ${type}`}>
			{card}
		</div>
	);
}
