import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const Cart = ({ onContinueShopping }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // Calculate total cost of items in the cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);
    };

    // Calculate subtotal for a specific item
    const calculateTotalCost = (item) => {
        return item.cost * item.quantity;
    };

    // Handle incrementing item quantity
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // Handle decrementing item quantity
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name)); // Remove item if quantity reaches 0
        }
    };

    // Handle removing an item from the cart
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Handle continuing shopping
    const handleContinueShopping = () => {
        if (onContinueShopping) {
            onContinueShopping(); // Call parent-provided function
        }
    };

    // Placeholder for checkout functionality
    const handleCheckoutShopping = () => {
        alert('Functionality to be added for future reference');
    };

    // Calculate total number of items in the cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.name}>
                                <div>
                                    <img src={item.image} alt={item.name} style={{ width: 100 }} />
                                    <h3>{item.name}</h3>
                                    <p>Cost: ₹{item.cost}</p>
                                    <p>Subtotal: ₹{calculateTotalCost(item)}</p>
                                    <div>
                                        <button onClick={() => handleDecrement(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncrement(item)}>+</button>
                                    </div>
                                    <button onClick={() => handleRemove(item)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ₹{calculateTotalAmount()}</h2>
                    <button onClick={handleContinueShopping}>Continue Shopping</button>
                    <button onClick={handleCheckoutShopping}>Checkout</button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div>
                <p>Total Items: {totalQuantity}</p>
            </div>
        </div>
    );
};

export default Cart;
