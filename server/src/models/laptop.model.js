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

module.exports={getAllLaptops};