
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

module.exports = { getAllCameras };
