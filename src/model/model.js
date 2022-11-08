const mongoose = require("mongoose");
const Players_Schema = new mongoose.Schema({
  ranking: {
    type: Number,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    require: true,
    trim: true,
  },
  dob: {
    type: Date,
    require: true,
    trim: true,
  },
  country: {
    type: String,
    require: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

const Players_Collection = new mongoose.model(
  "Players_Collection",
  Players_Schema
);
module.exports = Players_Collection;
