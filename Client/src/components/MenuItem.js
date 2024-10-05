// src/components/MenuItem.js
import React, { useState } from 'react';
import './MenuItem.css'; 

const MenuItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1); 

    const handleAddItem = () => {
       
        console.log(`Added ${quantity} of ${item.name}`);
        
    };

    return (
        <div className="menu-item">
            <img className="menu-item-image" src={item.image_url} alt={item.name}  />
            <div className="menu-item-details">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-category">{item.category}</p>
                <p className="menu-item-price">${item.price}</p>
                <p className="menu-item-available">Available: {item.available_quantity}</p>
                <input 
                    type="number" 
                    value={quantity} 
                    min="1" 
                    max={item.available_quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    disabled={item.available_quantity === 0} 
                />
                <button 
                    onClick={handleAddItem} 
                    disabled={item.available_quantity === 0} 
                >
                    Add Item
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
