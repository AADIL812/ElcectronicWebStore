const { getAllLaptops, getLaptopbyBrand, getLaptopsByBudget } = require('../models/laptop.model');

// Controller to get all laptops
async function httpGetAllLaptops(req, res) {
    try {
        const laptops = await getAllLaptops();
        console.log('Laptop function called');
        if (laptops.length === 0) {
            return res.status(404).json({ message: "No laptops found." });
        }

        return res.status(200).json(laptops);
    } catch (error) {
        console.error('Error in httpGetAllLaptops:', error);
        return res.status(500).json({ error: 'An error occurred while fetching all laptops.' });
    }
}

// Controller to get laptops by brand
async function httpGetLaptopbyBrand(req, res) {
    try {
        const brand = req.params.brand || req.query.brand;
        if (!brand) {
            return res.status(400).json({ error: 'Brand parameter is required.' });
        }

        const laptops = await getLaptopbyBrand(brand);
        if (laptops.length === 0) {
            return res.status(404).json({ message: `No laptops found for brand: ${brand}.` });
        }

        return res.status(200).json(laptops);
    } catch (error) {
        console.error('Error in httpGetLaptopbyBrand:', error);
        return res.status(500).json({ error: 'An error occurred while fetching laptops by brand.' });
    }
}

// Controller to get laptops by budget
async function httpGetLaptopsByBudget(req, res) {
    try {
        const lowerPrice = parseFloat(req.query.lowerPrice);
        const upperPrice = parseFloat(req.query.upperPrice);

        if (isNaN(lowerPrice) || isNaN(upperPrice)) {
            return res.status(400).json({ error: 'Both lowerPrice and upperPrice are required and must be valid numbers.' });
        }

        const laptops = await getLaptopsByBudget(lowerPrice, upperPrice);
        if (laptops.length === 0) {
            return res.status(404).json({ message: `No laptops found within the price range $${lowerPrice} - $${upperPrice}.` });
        }

        return res.status(200).json(laptops);
    } catch (error) {
        console.error('Error in httpGetLaptopsByBudget:', error);
        return res.status(500).json({ error: 'An error occurred while fetching laptops by budget.' });
    }
}

module.exports = { httpGetAllLaptops, httpGetLaptopbyBrand, httpGetLaptopsByBudget };
