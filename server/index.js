const express = require("express");
const app = express();
const Mongoclient = require("mongodb").MongoClient;
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const port = process.env.PortNumber;

const connectionString = `mongodb+srv://Denis:${process.env.MongoPassword}@users.7smawq8.mongodb.net/?retryWrites=true&w=majority`;
let client = new Mongoclient(connectionString);
let conn;

app.get("/", async (req, res) => {
  try {
    conn = await client.connect();
    res.send("Connection succsessful");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at port number ${port}`);
});
