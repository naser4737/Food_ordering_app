// src/components/Menu.js
import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Menu.css";
const Menu = ({ addToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/menu");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h1 style={{
      textAlign: "center",
      color: "#333", 
      fontFamily: "Arial, sans-serif" ,
      fontStyle: "italic"
      }}>
  Today's Menu
</h1>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item._id} className="menu-item">
            <img src={item.image_url} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
            <p>Available: {item.available_quantity}</p>
            <button onClick={() => addToOrder(item)}>Add to Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
