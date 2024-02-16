const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/////////////////////////////////////////////////////////////////////

// Routers
const userRouter = require("./routers/user");
//

// DATABASE CONNECTION
const connectionString = process.env.MongoConnection;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// API CALLS
app.use("/user", userRouter);


// Listening
const port = process.env.PortNumber;
app.listen(port, () => {
  console.log(`Server running at port number ${port}`);
});
