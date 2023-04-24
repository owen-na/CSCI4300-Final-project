import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const cardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a card name."],
    },
    description: {
      type: String,
      required: [true, "Please enter a card description"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
