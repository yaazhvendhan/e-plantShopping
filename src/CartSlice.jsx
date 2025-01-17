import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Extract details from the payload
      const existingItem = state.items.find(item => item.name === name); // Check if the item already exists in the cart
      
      if (existingItem) {
        existingItem.quantity++; // If exists, increase the quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Otherwise, add the item with quantity 1
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload; // Extract the item name from the payload
      state.items = state.items.filter(item => item.name !== name); // Remove the item from the cart
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract item name and the new quantity
      const itemToUpdate = state.items.find(item => item.name === name); // Find the item to update
      
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update its quantity
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as default for use in store.js
export default CartSlice.reducer;
