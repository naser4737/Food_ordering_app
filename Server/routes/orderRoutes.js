const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// GET /orders - Fetch the order history of a user
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /orders - Place an order
router.post("/", async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
