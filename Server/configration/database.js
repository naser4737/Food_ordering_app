const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/orderHistory")
    .then(()=> console.log("Connected to MongoDB.."))
    .catch((err) => console.log("Mongo Error",err));
};

module.exports = connectDB;