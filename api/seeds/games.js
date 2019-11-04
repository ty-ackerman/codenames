const Game = require('../models/game');

const game = new Game({
	activeCards: [
		{ card: 'labore', type: 'teamTwo', picked: false },
		{ card: 'quas', type: 'teamTwo', picked: false },
		{ card: 'veritatis', type: 'teamOne', picked: false },
		{ card: 'rerum', type: 'teamTwo', picked: false },
		{ card: 'veritatis', type: 'teamTwo', picked: false },
		{ card: 'architecto', type: 'neutral', picked: false },
		{ card: 'perferendis', type: 'teamOne', picked: false },
		{ card: 'assumenda', type: 'teamTwo', picked: false },
		{ card: 'sit', type: 'teamOne', picked: false },
		{ card: 'aliquid', type: 'teamOne', picked: false },
		{ card: 'quos', type: 'neutral', picked: false },
		{ card: 'dicta!', type: 'teamOne', picked: false },
		{ card: 'quo!', type: 'teamOne', picked: false },
		{ card: 'natus,', type: 'neutral', picked: false },
		{ card: 'elit.', type: 'teamOne', picked: false },
		{ card: 'velit', type: 'neutral', picked: false },
		{ card: 'nisi', type: 'teamTwo', picked: false },
		{ card: 'sit', type: 'teamOne', picked: false },
		{ card: 'fuga', type: 'death', picked: false },
		{ card: 'architecto.', type: 'neutral', picked: false },
		{ card: 'Ratione', type: 'teamTwo', picked: false },
		{ card: 'Explicabo', type: 'neutral', picked: false },
		{ card: 'accusamus', type: 'teamTwo', picked: false },
		{ card: 'amet', type: 'neutral', picked: false },
		{ card: 'dolor,', type: 'teamOne', picked: false }
	],
	teams: {
		teamOne: {
			teamName: 'Big Ringz',
			members: [ 'Ty', 'Mel' ],
			hintGiver: 'Mel',
			turn: true
		},
		teamTwo: {
			teamName: 'Doobz',
			members: [ 'Ujju', 'Aluju' ],
			hintGiver: 'Ujju',
			turn: false
		}
	}
});

module.exports = game;
