//This is the default format to be used when creating a model

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const testSchema = new Schema({
	name: {
		type: String,
		required: true,
		default: 'This is a test'
	}
});

module.exports = {
	Test: model('Test', testSchema)
};
