const { getAllLaptops, getLaptopbyBrand, getLaptopsByBudget } = require('../models/laptop.model');

// Controller to get all laptops
async function httpGetAllLaptops(req, res) {
    try {
        const laptops = await getAllLaptops();

        // Check if any laptops were retrieved
        if (laptops.length === 0) {
            return res.status(404).json({ message: "No laptops found." });
        }

        return res.status(200).json(laptops); // Return laptops in the response
    } catch (error) {
        console.error('Error in httpGetAllLaptops:', error);
        return res.status(500).json({ error: 'An error occurred while fetching all laptops.' });
    }
}

// Controller to get laptops by brand
async function httpGetLaptopbyBrand(req, res) {
    try {
        const brand = req.params.brand || req.query.brand;

        // Validate brand parameter
        if (!brand) {
            return res.status(400).json({ error: 'Brand parameter is required.' });
        }

        const laptops = await getLaptopbyBrand(brand);

        // Check if laptops were found for the given brand
        if (laptops.length === 0) {
            return res.status(404).json({ message: `No laptops found for brand: ${brand}.` });
        }

        return res.status(200).json(laptops); // Return the laptops by brand
    } catch (error) {
        console.error('Error in httpGetLaptopbyBrand:', error);
        return res.status(500).json({ error: 'An error occurred while fetching laptops by brand.' });
    }
}

async function httpgetLaptopsByBudget(req, res) {
    console.log("Calling laptop control function");
    try {
        // Extract lowerPrice and upperPrice from query parameters
        const lowerPrice = parseFloat(req.query.lowerPrice);
        const upperPrice = parseFloat(req.query.upperPrice);

        // Validate that both lowerPrice and upperPrice are provided and are valid numbers
        if (isNaN(lowerPrice) || isNaN(upperPrice)) {
            return res.status(400).json({
                error: 'Both lowerPrice and upperPrice query parameters must be valid numbers.',
            });
        }

        // Fetch laptops within the budget range
        const laptops = await getLaptopsByBudget(lowerPrice, upperPrice);
        console.log(lowerPrice);
        console.log(upperPrice);
        console.log(typeof(upperPrice));
        // Check if any laptops were found
        if (laptops.length === 0) {
            return res.status(404).json({
                message: `No laptops found within the price range: ${lowerPrice} - ${upperPrice}.`,
            });
        }

        // Return the fetched laptops
        return res.status(200).json(laptops);
    } catch (error) {
        // Log the error and return a 500 Internal Server Error response
        console.error('Error in httpgetLaptopsByBudget:', error);
        return res.status(500).json({
            error: 'An error occurred while fetching laptops by budget.',
        });
    }
}


module.exports = { httpGetAllLaptops, httpGetLaptopbyBrand,httpgetLaptopsByBudget };
