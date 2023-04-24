const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

require("dotenv").config({ path: "../.env", debug: true });
const app = express();

const uri = `mongodb+srv://steventran:${process.env.REACT_APP_PASSWORD}@cluster0.oeg5zlf.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
app.post("/cards", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
connect();
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
