// src/App.js
import React, { useState } from "react";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import OrderHistory from "./components/OrderHistory";
import './App.css'; // Add styles if needed


const App = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const addToOrder = (item) => {
    if (item.available_quantity > 0) {
      setOrderItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 },
        
      ]);
      setTotalPrice((prevTotal) => prevTotal + item.price);
      item.available_quantity>0 ?item.available_quantity -= 1: item.available_quantity=0;
    } else {
      alert("Item is out of stock!");
    }
  };

  const clearOrder = () => {
    setOrderItems([]);
    setTotalPrice(0);
  };

  return (
    <div > <nav className="navbar">
    <h1>My Café App</h1>
    <p>Your one-stop solution for ordering coffee and tasty snacks!</p>
  </nav> 
    <div className="App">
     
    <div className="menu-section">
      <Menu addToOrder={addToOrder} />
      </div>
      <div className="order-section">
        <div className="order-details">
      {orderItems.length >= 0 && (
        <OrderForm orderItems={orderItems} totalPrice={totalPrice} clearOrder={clearOrder} />
      )} </div>
      <div className="order-history">
      
      <button className="toggle-button" onClick={() => setShowOrderHistory(!showOrderHistory)}>
          {showOrderHistory ? "Hide Order History" : "Show Order History"}
        </button>

        {/* Conditionally render the OrderHistory component */}
        {showOrderHistory && (
          
            <OrderHistory />
          
        )}
        </div>
      </div>
     </div>
     </div>
  );
};

export default App;