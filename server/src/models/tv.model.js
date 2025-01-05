const {MongoClient} = require('mongodb');
const { get } = require('mongoose');

const mongo_url= "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

async function getAllTVs()
{
    const client=new MongoClient(mongo_url);
    await client.connect();
    const database=client.db('ELectronic-webstore');
    const collection=database.collection('TV');
    const tvs=await collection.find({}).toArray();
    return tvs;
    client.close();
}

async function getTVbyBrand(brand)
{
    const client=new MongoClient(mongo_url);
    await client.connect();
    const database=client.db("ELectronic-webstore");
    const collection=database.collection("TV");
    const tv=collection.find({Brand:brand}).toArray();
    return tv;
    client.close();
}

async function getTVsByBudget(lowerPrice, upperPrice) {
    const client = new MongoClient(mongo_url);
    try {
        await client.connect();
        const database = client.db('ELectronic-webstore');
        const collection = database.collection('TV');

        // Query TVs where price is between lowerPrice and upperPrice
        const tvs = await collection.find({
            'Selling Price': { $gte: lowerPrice, $lte: upperPrice } // Field name in quotes
        }).toArray();

        return tvs; // Return the fetched TVs
    } catch (error) {
        console.error('Error fetching TVs by budget:', error);
        return []; // Return an empty array in case of an error
    } finally {
        await client.close(); // Ensure the client is closed properly
    }
}

module.exports={getAllTVs,getTVbyBrand,getTVsByBudget}