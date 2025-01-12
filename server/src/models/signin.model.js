const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const mongo_url = "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

// Check if user exists, validate password, and increment access
async function authenticateUser(userid, password) {
  const client = new MongoClient(mongo_url);

  try {
    // Connect to the MongoDB client
    await client.connect();
    const db = client.db('ELectronic-webstore');
    const collection = db.collection('Users');

    // Fetch the user by UserId
    const user = await collection.findOne({ UserId: userid });
    console.log(user);

    if (!user) {
      throw new Error('User not found');
    }

    // Validate the password
    const pwd = user.password;
    if (pwd !== password) {
      console.log(pwd === password);
      console.log(password);
      throw new Error('Invalid password');
    }

    // Fetch the record with the highest `access` value
    const lastRecord = await collection.findOne({}, { sort: { access: -1 } });

    // Calculate the new access value
    const newAccessValue = lastRecord ? lastRecord.access + 1 : 1;

    // Increment the `access` field for the user
    await collection.updateOne(
      { UserId: userid }, // Filter by UserId
      { $set: { access: newAccessValue } } // Set `access` to `lastRecord.access + 1`
    );

    console.log(`Access count updated to ${newAccessValue} for user: ${userid}`);

    // Return the updated user
    const updatedUser = await collection.findOne({ UserId: userid });
    return updatedUser;

  } catch (err) {
    console.error(err.message);
    throw err;
  } finally {
    // Ensure the client is closed
    await client.close();
  }
}

module.exports = { authenticateUser };

