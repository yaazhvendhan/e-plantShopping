import { configureStore } from '@reduxjs/toolkit'; // Import Redux Toolkit's configureStore
import cartReducer from './CartSlice'; // Import the reducer from CartSlice

// Create the store with the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer to the store
  },
});

// Export the store as the default export
export default store;
