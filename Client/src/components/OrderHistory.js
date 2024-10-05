// src/components/OrderHistory.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

 
  return (
    <div>
      <h1>Order History</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <h2>Order ID: {order._id}</h2>
          <p>Status: {order.status}</p>
          <p>Total Price: ${order.total_price}</p>
          <p>Order Date: {new Date(order.order_date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
