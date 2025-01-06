const { httpGetAllMobiles, httpGetMobilebyBrand, httpGetMobilesByBudget } = require('./mobile.controller');
const express = require('express');
const mobileRouter = express.Router();

// Define routes
mobileRouter.get('/', httpGetAllMobiles); // Get all mobiles
mobileRouter.get('/brand/:brand', httpGetMobilebyBrand); // Get mobiles by brand
mobileRouter.get('/budget', httpGetMobilesByBudget); // Get mobiles within budget range

module.exports = { mobileRouter };
