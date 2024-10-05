// src/components/OrderForm.js
import React, { useState } from "react";
import axios from "axios";

const OrderForm = ({ orderItems, totalPrice, clearOrder }) => {
  const [tableNumber, setTableNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const placeOrder = async () => {
    const orderDetails = {
      total_price: totalPrice,
      status: "Pending",
      order_items: orderItems.map((item) => ({
        menu_item_id: item._id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      await axios.post("http://localhost:5000/orders", orderDetails);
      clearOrder();
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Table Number: {tableNumber}</p>
      <p>Contact Number: {contactNumber}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={placeOrder}>Place Order</button>
      <button style={{margin:10}} onClick={clearOrder}>Clear Order</button>
    </div>
  );
};

export default OrderForm;
