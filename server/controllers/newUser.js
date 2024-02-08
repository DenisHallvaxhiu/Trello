// Model
const User = require("../Models/userModel")
// 
// Controller
const newUser = async (req, res) => {
  const { username,email,password } = req.body;

  const contract = new User({
    username: username,
    email: email,
    password:password
  });

  try {
    await contract.save();
    res.send("Contract saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving to database");
  }
};

module.exports = newUser