const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Card = require("./models/cardModel");
const app = express();

const uri = `mongodb+srv://steventran:AldGH9yzYwP3rqOw@cluster0.oeg5zlf.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
app.post("/card", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
connect();
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
