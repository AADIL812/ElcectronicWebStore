const mongo_url = "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";
const {MongoClient}=require("mongodb");

async function addUser(userid, name, email, pwd) {
    console.log("Add user function called");
    const client = new MongoClient(mongo_url);
    try {
      await client.connect();
      const database = client.db('ELectronic-webstore');
      const collection = database.collection('Users');
  
      // Check if UserId or email already exists
      const existingUser = await collection.findOne({
        $or: [{ UserId: userid }, { email: email }],
      });

      if (existingUser) {
        let errorMessage = "";
        if (existingUser.UserId === userid) {
          errorMessage += "UserId already exists. ";
        }
        if (existingUser.email === email) {
          errorMessage += "Email already exists.";
        }
        console.log("Conflict:", errorMessage);
        return { success: false, message: errorMessage };
      }
      
      const lastRecord=await collection.findOne({},{sort:{access:-1}});
      var last=0;
      if (lastRecord)
      {
        last=lastRecord.access+1;
      }
      // Add the new user with the required structure
      const newUser = {
        UserId: userid,
        Name: name,
        email: email,
        password: pwd,
        access: last,
      };
  
      const result = await collection.insertOne(newUser);
      console.log("User added successfully:", result.insertedId);
      return { success: true, message: "User added successfully.", userId: result.insertedId };
    } catch (error) {
      console.error("Error occurred while adding user:", error);
      return { success: false, message: "Error occurred while adding user." };
    } finally {
      await client.close();
    }
  }
  
module.exports={addUser}