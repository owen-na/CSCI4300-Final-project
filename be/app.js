const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Card = require("./models/cardModel");
const app = express();
const bodyParser = require("body-parser");

// app.use(express.json()); need this line??
app.use(bodyParser.json());
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
app.post("/cards", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(200).json(card);
  } catch (error) {
    console.log(req.body);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/cards/:name", async (req, res) => {
  const userId = req.params.name;
  try {
    const isDeleted = await Card.findByIdAndDelete(userId);
    if (!isDeleted) {
      return res.status(400).json({ msg: "User Not Found" });
    } else {
      return res.status(200).json({ msg: "success" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/cards", async (req, res) => {
  try {
    const users = await Card.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
  }
});

app.put("/cards/:name", verifyToken, async (req, res) => {
  const { name, description, image } = req.body;
  try {
    const user = await Card.findOneAndUpdate(
      { name: name, description: description, image: image }
    );
    console.log("Updated card successfully.");
    res.status(200).json({ user });
  } catch (err) {
    console.log("cannot find card");
  }
});

function verifyToken(req, res, next) {
  const auth = req.headers["authorization"];
  const token = auth && auth.split(" ")[1];
  if (!token) {
    console.log("no token found");
  } else {
    jwt.verify(token, "passwordKey", (err, decoded) => {
      if (err) {
        console.log(err);
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
}

connect();
app.listen(8000, () => {
  console.log("Server started on port 8000");
});

