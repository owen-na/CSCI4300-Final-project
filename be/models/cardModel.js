const mongoose = require("mongoose");
const cardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // required: [true, "Please enter a card name."],
    },
    description: {
      type: String,
      required: true,
      // required: [true, "Please enter a card description"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
