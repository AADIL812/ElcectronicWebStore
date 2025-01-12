const {addUser}=require('../models/signup.model')

async function httpaddUser(req, res) {
  try {
    const { userid, name, email, pwd } = req.body;
    console.log(req.body);
    // Validate the request body
    if (!userid || !name || !email || !pwd) {
      return res.status(400).json({
        success: false,
        message: "All fields (userid, name, email, pwd) are required.",
      });
    }

    // Call the addUser function to add the user to the database
    const result = await addUser(userid, name, email, pwd);

    if (result.success) {
      return res.status(201).json({
        success: true,
        message: "User added successfully.",
        userId: result.userId,
      });
    } else {
      return res.status(409).json({
        success: false,
        message: result.message,
      });
    }
  } catch (error) {
    console.error("Error in httpaddUser:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
}

module.exports = { httpaddUser };
