//Import all models
const { Test } = require('../models/Test');

//import created seeds
const tests = require('./tests');

const mongoose = require('mongoose');

//db-name should match that in constants.js
const uri = 'mongodb://localhost:27017/db-name';

//Deletes existing seeds
const truncateDatabase = async () => {
	return Promise.all([ Test.deleteMany() ]);
};

//
const makeSeeds = async () => {
	//connect to db
	await mongoose.connect(uri);
	//clear db
	await truncateDatabase();
	//iterate through array of tests and save
	// await Promise.all(tests.map(user => tests.save()));
	//this is commented out, but if you just have on seed to save (no array) use this
	await tests.save();
	//disconnect from db
	mongoose.connection.close();
};

makeSeeds();
