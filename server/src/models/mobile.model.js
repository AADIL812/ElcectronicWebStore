const {MongoClient} = require('mongodb');

const mongo_url= "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";


// function to fetch all mobiles from database

async function getAllMobiles(){
    const client=new MongoClient(mongo_url);
    await client.connect();
    const database=client.db('ELectronic-webstore');
    const collection=database.collection('Phone');
    const mobiles=await collection.find({}).toArray();
    return mobiles;
    client.close();
}

async function getMobilebyBrand(brand) 
{
    const client=new MongoClient(mongo_url);
    await client.connect();
    const database=client.db('ELectronic-webstore');
    const collection=database.collection('Phone');
    const mobiles=await collection.find({brand:brand}).toArray();
    return mobiles;
    client.close();
}

async function getMobilesByBudget(lowerPrice, upperPrice) {
    const client = new MongoClient(mongo_url);
    try {
        await client.connect();
        const database = client.db('ELectronic-webstore');
        const collection = database.collection('Phone');

        // Query mobiles where price is between lowerPrice and upperPrice
        const mobiles = await collection.find({
            'price(USD)': { $gte: lowerPrice, $lte: upperPrice }
        }).toArray();

        return mobiles; // Return the fetched mobiles
    } catch (error) {
        console.error('Error fetching mobiles by budget:', error);
        return []; // Return an empty array in case of an error
    } finally {
        await client.close(); // Ensure the client is closed properly
    }
}

module.exports={getAllMobiles,getMobilebyBrand,getMobilesByBudget};