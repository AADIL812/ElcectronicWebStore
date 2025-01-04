// services/mongo.js
const { MongoClient } = require('mongodb');

const mongo_url = "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

let client;

async function mongoConnect() {
    client = new MongoClient(mongo_url);
    await client.connect();
    console.log('Connected to MongoDB');
}

async function mongoDisconnect() {
    await client.close();
    console.log('Disconnected from MongoDB');
}

module.exports = { mongoConnect, mongoDisconnect };


