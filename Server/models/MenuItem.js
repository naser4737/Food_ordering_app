const mongoose = require('mongoose');

// Define the Menu Item Schema
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availableQuantity: {
    type: Number,
    required: true
  },
  subCategory: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'Veg' // or 'Non-Veg'
  }
});

// Export the MenuItem model
module.exports = mongoose.model('MenuItem', menuItemSchema);
