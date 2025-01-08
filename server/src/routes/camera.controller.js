const {getAllCameras,getCamerabyBrand,getCamerasByBudget}=require('../models/camera.model');

async function httpgetAllCameras(req,res)
{
    console.log("get all cameras function called");
    const cameras=await getAllCameras();
    return res.status(200).json(cameras);
}

async function httpgetCamerabyBrand(req, res) {
    console.log("get cameras by brand function called");
    console.log('Brand param:', req.params.brand);
    console.log('Brand query:', req.query.brand);

    try {
        // Extract the brand from the request query or params
        const brand = req.params.brand || req.query.brand;
        if (!brand) {
            // If no brand is provided, return a 400 Bad Request response
            return res.status(400).json({
                error: 'Brand parameter is required',
            });
        }

        // Fetch cameras by brand using the helper function
        const cameras = await getCamerabyBrand(brand);

        // Check if cameras were found
        if (cameras.length === 0) {
            return res.status(404).json({
                message: `No cameras found for brand: ${brand}`,
            });
        }

        // Return the fetched cameras in the response
        return res.status(200).json(cameras);
    } catch (error) {
        // Log the error and return a 500 Internal Server Error response
        console.error('Error in httpgetCamerabyBrand:', error);
        return res.status(500).json({
            error: 'An error occurred while fetching cameras by brand',
        });
    }
}

async function httpgetCamerasByBudget(req, res) {
    console.log("get cameras by price function called");
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

        // Fetch cameras within the budget range
        const cameras = await getCamerasByBudget(lowerPrice, upperPrice);

        // Check if any cameras were found
        if (cameras.length === 0) {
            return res.status(404).json({
                message: `No cameras found within the price range: ${lowerPrice} - ${upperPrice}.`,
            });
        }

        // Return the fetched cameras
        return res.status(200).json(cameras);
    } catch (error) {
        // Log the error and return a 500 Internal Server Error response
        console.error('Error in httpgetCamerasByBudget:', error);
        return res.status(500).json({
            error: 'An error occurred while fetching cameras by budget.',
        });
    }
}

module.exports={httpgetAllCameras,httpgetCamerabyBrand,httpgetCamerasByBudget}