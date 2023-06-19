const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
