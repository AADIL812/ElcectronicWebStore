
const { MongoClient } = require('mongodb');
const mongo_url = "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

// Function to fetch all cameras from the database
async function getAllCameras() {
    const client = new MongoClient(mongo_url);
    try {
        // Connect to MongoDB
        await client.connect();

        // Get the database and collection dynamically
        const database = client.db('ELectronic-webstore'); // Using default database from URI
        const collection = database.collection('Camera'); // Assuming collection is 'cameras'

        // Fetch all camera details from the collection
        const cameras = await collection.find({}).toArray();
        return cameras;
    } catch (error) {
        console.error('Error fetching cameras:', error);
        throw error;
    } finally {
        await client.close();
    }
}
async function getCamerabyBrand(brand) {
    const client = new MongoClient(mongo_url);
    try {
        await client.connect();
        const database = client.db('ELectronic-webstore');
        const collection = database.collection('Camera');

        // Use regex to match the brand name case-insensitively
        const regex = new RegExp(`^${brand}`, 'i');
        const cameras = await collection.find({ Model: { $regex: regex } }).toArray();

        return cameras; // Return the fetched cameras
    } catch (error) {
        console.error('Error fetching cameras by brand:', error);
        return []; // Return an empty array in case of an error
    } finally {
        await client.close(); // Ensure the client is closed properly
    }
}

async function getCamerasByBudget(lowerPrice, upperPrice) {
    const client = new MongoClient(mongo_url);
    try {
        await client.connect();
        const database = client.db('ELectronic-webstore');
        const collection = database.collection('Camera');

        // Query cameras where price is between lowerPrice and upperPrice
        const cameras = await collection.find({
            Price: { $gte: lowerPrice, $lte: upperPrice }
        }).toArray();

        return cameras; // Return the fetched cameras
    } catch (error) {
        console.error('Error fetching cameras by budget:', error);
        return []; // Return an empty array in case of an error
    } finally {
        await client.close(); // Ensure the client is closed properly
    }
}
module.exports = { getAllCameras,getCamerabyBrand ,getCamerasByBudget};
