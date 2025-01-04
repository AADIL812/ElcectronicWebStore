const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const port = 3000;

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const { mongoConnect, mongoDisconnect } = require('./services/mongo');
const { getAllCameras } = require('./models/camera.model');

async function startServer() {
  console.log('Starting server...');
  await mongoConnect();

  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  try {
    console.log('Fetching cameras...');
    const cameras = await getAllCameras();
    console.log('Cameras:', cameras); // Verify the fetched data
  } catch (error) {
    console.error('Error fetching cameras:', error);
  }

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();

