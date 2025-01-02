import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from Redux
import { addItem } from './CartSlice'; // Import addItem from CartSlice
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    const dispatch = useDispatch(); // Initialize dispatch

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant)); // Dispatch the addItem action with the product details
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true, // Update state to reflect the product is added
        }));
    };

    const handleRemoveFromCart = (plant) => {
        setAddedToCart((prevState) => {
            const updatedState = { ...prevState };
            delete updatedState[plant.name];
            return updatedState;
        });
    };

    // Remaining code for rendering products and UI...

    return (
        <div>
            <div className="product-grid">
                {/* Example plant category */}
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h1>{category.category}</h1>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <img
                                        className="product-image"
                                        src={plant.image}
                                        alt={plant.name}
                                    />
                                    <div className="product-title">
                                        {plant.name}
                                    </div>
                                    <div className="product-cost">
                                        {plant.cost}
                                    </div>
                                    {addedToCart[plant.name] ? (
                                        <button
                                            className="product-button"
                                            onClick={() =>
                                                handleRemoveFromCart(plant)
                                            }
                                        >
                                            Remove from Cart
                                        </button>
                                    ) : (
                                        <button
                                            className="product-button"
                                            onClick={() =>
                                                handleAddToCart(plant)
                                            }
                                        >
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
