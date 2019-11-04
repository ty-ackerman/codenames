//Import all models
const Game = require('../models/game');

//import created seeds
const game = require('./games');

const mongoose = require('mongoose');

//db-name should match that in constants.js
const uri = 'mongodb://localhost:27017/codenames';

//Deletes existing seeds
const truncateDatabase = async () => {
	return Promise.all([ Game.deleteMany() ]);
};

//
const makeSeeds = async () => {
	//connect to db
	await mongoose.connect(uri);
	//clear db
	await truncateDatabase();
	//iterate through array of games and save
	// await Promise.all(tests.map(user => tests.save()));
	//this is commented out, but if you just have one seed to save (no array) use this
	await game.save();
	//disconnect from db
	mongoose.connection.close();
};

makeSeeds();
