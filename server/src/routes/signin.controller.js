// controllers/auth.controller.js
const { authenticateUser } = require('../models/signin.model');

async function loginUser(req, res) {
  const { userid, password } = req.body;

  try {
    const user = await authenticateUser(userid, password);
    res.status(200).json({ message: 'Login successful', user });
    return user;
  } catch (error) {
    if (error.message === 'User not found') {
      res.status(404).json({ message: "Userid doesn't exist." });
    } else if (error.message === 'Invalid password') {
      res.status(401).json({ message: 'Password is incorrect.' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = { loginUser };
