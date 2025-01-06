const { getAllMobiles, getMobilebyBrand, getMobilesByBudget } = require('../models/mobile.model');

// Controller to get all mobiles
async function httpGetAllMobiles(req, res) {
    try {
        const mobiles = await getAllMobiles();

        // Check if any mobiles were retrieved
        if (mobiles.length === 0) {
            return res.status(404).json({ message: "No mobiles found." });
        }

        return res.status(200).json(mobiles); // Return mobiles in the response
    } catch (error) {
        console.error('Error in httpGetAllMobiles:', error);
        return res.status(500).json({ error: 'An error occurred while fetching all mobiles.' });
    }
}

// Controller to get mobiles by brand
async function httpGetMobilebyBrand(req, res) {
    try {
        const brand = req.params.brand || req.query.brand;

        // Validate brand parameter
        if (!brand) {
            return res.status(400).json({ error: 'Brand parameter is required.' });
        }

        const mobiles = await getMobilebyBrand(brand);

        // Check if mobiles were found for the given brand
        if (mobiles.length === 0) {
            return res.status(404).json({ message: `No mobiles found for brand: ${brand}.` });
        }

        return res.status(200).json(mobiles); // Return the mobiles by brand
    } catch (error) {
        console.error('Error in httpGetMobilebyBrand:', error);
        return res.status(500).json({ error: 'An error occurred while fetching mobiles by brand.' });
    }
}

// Controller to get mobiles within a budget range
async function httpGetMobilesByBudget(req, res) {
    try {
        const { lowerPrice, upperPrice } = req.query;

        // Validate price parameters
        if (!lowerPrice || !upperPrice) {
            return res.status(400).json({ error: 'Both lowerPrice and upperPrice parameters are required.' });
        }

        // Parse price values to numbers
        const lower = parseInt(lowerPrice, 10);
        const upper = parseInt(upperPrice, 10);

        if (isNaN(lower) || isNaN(upper)) {
            return res.status(400).json({ error: 'Invalid price values provided.' });
        }

        const mobiles = await getMobilesByBudget(lower, upper);

        // Check if any mobiles were found within the budget
        if (mobiles.length === 0) {
            return res.status(404).json({ message: `No mobiles found within the budget of $${lower} to $${upper}.` });
        }

        return res.status(200).json(mobiles); // Return the mobiles within the budget
    } catch (error) {
        console.error('Error in httpGetMobilesByBudget:', error);
        return res.status(500).json({ error: 'An error occurred while fetching mobiles within the budget.' });
    }
}

module.exports = { httpGetAllMobiles, httpGetMobilebyBrand, httpGetMobilesByBudget };
