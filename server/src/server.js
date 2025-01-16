const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const port = 5000;

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const { mongoConnect, mongoDisconnect } = require('./services/mongo');
const { getAllCameras,getCamerabyBrand,getCamerasByBudget } = require('./models/camera.model');
const { getAllLaptops,getLaptopbyBrand ,getLaptopsByBudget} = require('./models/laptop.model');
const {getAllMobiles,getMobilebyBrand}=require('./models/mobile.model')
const { getAllTVs,getTVbyBrand} = require('./models/tv.model');
const {addUser}=require('./models/signup.model');
const {increaseQty,getCart,decreaseQty}  = require('./models/addtoCart.model')
async function startServer() {
  console.log('Starting server...');
  //await mongoConnect();

  /*mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  }); */


  try {
    // console.log('Fetching cameras...');
    // const cameras = await getCamerabyBrand("Canon");
    // console.log('Cameras:', cameras); // Verify the fetched data

     console.log('Fetching laptops...');
    //const laptops = await getAllLaptops();
    //console.log('Laptops:', laptops); // Verify the fetched data

  //const cart=await getCart(13);
  //console.log(cart);
  } catch (error) {
    console.error('Error fetching cameras:', error);
  }

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();

