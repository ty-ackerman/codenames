const express = require('express');
const Router = express.Router;
const router = Router();
const Game = require('../models/game');

router.get('/', async (req, res, next) => {
	try {
		const docs = await Game.find();
		res.status(200).send({
			data: docs
		});
	} catch (error) {
		next(error);
	}
});

router.get('/:game_id', async (req, res, next) => {
	try {
		const { game_id } = req.params;
		const doc = await Game.findById(game_id);
		res.status(200).send({
			data: doc
		});
	} catch (error) {
		next(error);
	}
});

router.post('/add', async (req, res, next) => {
	try {
		const { teams, activeCards } = req.body;
		const newGame = new Game({ teams, activeCards });
		await newGame.save();
		res.status(200).send({ data: newGame });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
