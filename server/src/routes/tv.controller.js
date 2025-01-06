const { getAllTVs, getTVbyBrand, getTVsByBudget } = require('../models/tv.model');

// Controller to get all TVs
async function httpGetAllTVs(req, res) {
    try {
        const tvs = await getAllTVs();

        // Check if any TVs were retrieved
        if (tvs.length === 0) {
            return res.status(404).json({ message: "No TVs found." });
        }

        return res.status(200).json(tvs); // Return TVs in the response
    } catch (error) {
        console.error('Error in httpGetAllTVs:', error);
        return res.status(500).json({ error: 'An error occurred while fetching all TVs.' });
    }
}

// Controller to get TVs by brand
async function httpGetTVbyBrand(req, res) {
    try {
        const brand = req.params.brand || req.query.brand;

        // Validate brand parameter
        if (!brand) {
            return res.status(400).json({ error: 'Brand parameter is required.' });
        }

        const tvs = await getTVbyBrand(brand);

        // Check if TVs were found for the given brand
        if (tvs.length === 0) {
            return res.status(404).json({ message: `No TVs found for brand: ${brand}.` });
        }

        return res.status(200).json(tvs); // Return the TVs by brand
    } catch (error) {
        console.error('Error in httpGetTVbyBrand:', error);
        return res.status(500).json({ error: 'An error occurred while fetching TVs by brand.' });
    }
}

// Controller to get TVs within a budget range
async function httpGetTVsByBudget(req, res) {
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

        const tvs = await getTVsByBudget(lower, upper);

        // Check if any TVs were found within the budget
        if (tvs.length === 0) {
            return res.status(404).json({ message: `No TVs found within the budget of $${lower} to $${upper}.` });
        }

        return res.status(200).json(tvs); // Return the TVs within the budget
    } catch (error) {
        console.error('Error in httpGetTVsByBudget:', error);
        return res.status(500).json({ error: 'An error occurred while fetching TVs within the budget.' });
    }
}

module.exports = { httpGetAllTVs, httpGetTVbyBrand, httpGetTVsByBudget };
