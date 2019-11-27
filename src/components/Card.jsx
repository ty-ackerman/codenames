import React from 'react';

export default function Card(props) {
	const { card, type } = props.card;

	return (
		<div onClick={() => console.log(props.card)} className={`card ${type}`}>
			{card}
		</div>
	);
}
