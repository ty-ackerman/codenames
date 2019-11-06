import React from 'react'

export default function Card(props) {
    const {card, type, picked} = props.card

    return (
        <div style = {{"width": "20%"}}>
            {card}
        </div>
    )
}
