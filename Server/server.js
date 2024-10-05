const express = require("express");     
const mongoose = require ("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require("./configration/database");

const app=express();


connectDB();
 // Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// Start the server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


