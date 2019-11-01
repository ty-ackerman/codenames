'use strict';

const express = require('express');
const router = express.Router();

//below is a test to see if the router is working => :3001/healthcheck
router.route('/').get((req, res, next) => {
	const message = `Let's hope this works!`;
	res.send(message);
});

exports.router = router;
