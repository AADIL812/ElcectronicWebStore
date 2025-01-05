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
module.exports={getAllMobiles};