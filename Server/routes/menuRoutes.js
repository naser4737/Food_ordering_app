const express = require("express");
const axios = require("axios");
const MenuItem = require("../models/MenuItem");
const router = express.Router();

// GET /menu - Fetch the list of available dishes
router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968");
        //console.log(response.data); // Log the API response
        const menuItems = response.data.record; // Assuming the API returns the menu items in 'record'
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
