const express = require('express');
const { httpaddUser } = require('./signup.controller');

const signupRouter = express.Router();

// Define the route
signupRouter.post('/', httpaddUser);

module.exports = { signupRouter };
