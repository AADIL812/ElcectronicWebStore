const {MongoClient} = require('mongodb');

const mongo_url= "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

// function to fetch all laptop from database
async function getAllLaptops(){
    const client=new MongoClient(mongo_url);
    await client.connect()
    const database=client.db('ELectronic-webstore');
    const collection=database.collection('Laptop');
    const cameras=await collection.find({}).toArray();
    return cameras;
    client.close();
}

async function getLaptopbyBrand(brand){
    const client=new MongoClient(mongo_url);
    await client.connect();
    const database=client.db('ELectronic-webstore');
    const collection=database.collection('Laptop');
    const laptop=await collection.find({Company:brand}).toArray();
    return laptop;
}

async function getLaptopsByBudget(lowerPrice, upperPrice) {
    const client = new MongoClient(mongo_url);
    try {
        await client.connect();
        const database = client.db('ELectronic-webstore');
        const collection = database.collection('Laptop');

        // Query laptops where price is between lowerPrice and upperPrice
        const laptops = await collection.find({
            'Price': { $gte: lowerPrice, $lte: upperPrice }
        }).toArray();

        // Log the prices of the laptops found
        return laptops; // Return the fetched laptops
    } catch (error) {
        console.error('Error fetching laptops by budget:', error);
        return []; // Return an empty array in case of an error
    } finally {
        await client.close(); // Ensure the client is closed properly
    }
}

module.exports={getAllLaptops,getLaptopbyBrand,getLaptopsByBudget};