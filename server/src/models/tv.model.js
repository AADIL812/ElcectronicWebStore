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

module.exports={getAllTVs}