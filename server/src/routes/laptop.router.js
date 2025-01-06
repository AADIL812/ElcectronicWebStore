const { httpGetAllLaptops, httpGetLaptopbyBrand,httpgetLaptopsByBudget} = require('./laptop.controller');
const express = require('express');
const laptopRouter = express.Router();

// Define routes
laptopRouter.get('/', httpGetAllLaptops); // Get all laptops
laptopRouter.get('/brand/:brand', httpGetLaptopbyBrand); // Get laptops by brand
laptopRouter.get('/budget',httpgetLaptopsByBudget ); // Get laptops within budget range

module.exports = { laptopRouter };
