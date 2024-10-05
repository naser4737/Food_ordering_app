const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    menu_item_id: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
    // table_number:  { type: Number, required: true },
    total_price: { type: Number, required: true },
    status: { type: String, required: true },
    order_date: { type: Date, default: Date.now },
    order_items: [orderItemSchema],
});

module.exports = mongoose.model("Order", orderSchema);
