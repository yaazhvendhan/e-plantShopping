import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // List of products in the cart
    },
    reducers: {
        // Add an item to the cart or increase its quantity if it already exists
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++; // Increase quantity if item already exists
            } else {
                state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
            }
        },
        // Remove an item from the cart by its name
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        // Update the quantity of an item in the cart
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity; // Update the quantity
            }
        },
    },
});

// Export actions to be used in other components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be used in the Redux store
export default cartSlice.reducer;
