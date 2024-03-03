const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  productcode: {
    type: String,
    required: true,
    unique: true,
  },
offer:{
  type: String,
  required: true,
},
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
