const mongoose = require("mongoose")

// Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password : String
})

// Model
const user = mongoose.model("User", userSchema)

// Export
module.exports = user;
