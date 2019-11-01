const express = require('express');
const Router = express.Router;
const router = Router();
const { Post } = require('../models/Post');

router.get('/', async (req, res, next) => {
	try {
		const docs = await Post.find().populate('user').populate('comments.user');
		res.status(200).send({
			data: docs
		});
	} catch (error) {
		next(error);
	}
});

router.get('/:post_id', async (req, res, next) => {
	try {
		const { post_id } = req.params;
		const doc = await Post.findById(post_id).populate('user').populate('comments.user');
		res.status(200).send({
			data: doc
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
