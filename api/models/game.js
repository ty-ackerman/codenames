const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const gameSchema = new Schema({
	teams: {
		type: Object,
		required: true
	},
	activeCards: {
		type: Array,
		required: true
	}
});

const Game = model('Game', gameSchema);

module.exports = Game;
