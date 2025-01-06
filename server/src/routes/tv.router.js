const { httpGetAllTVs, httpGetTVbyBrand, httpGetTVsByBudget } = require('./tv.controller');
const express = require('express');
const tvRouter = express.Router();

// Define routes
tvRouter.get('/', httpGetAllTVs); // Get all TVs
tvRouter.get('/brand/:brand', httpGetTVbyBrand); // Get TVs by brand
tvRouter.get('/budget', httpGetTVsByBudget); // Get TVs within budget range

module.exports = { tvRouter };
