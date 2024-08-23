const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: [" ", "inactive"],
  },
  reviews: {
    type: [String],
    required: true,
  },
  // size: {
  //   type: String,
  //   required: true,
  // },
  color: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  ref: {
    type: String, 
    required: true,
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
    max: 1000, // maximum weight is 1000kg
    validate: {
      validator: Number.isInteger,
      message: "Weight must be an integer value.",
    },
    
  },

},
  { timestamps: true }

);



module.exports = mongoose.model('Product', ProductSchema);
