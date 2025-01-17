import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Make sure this points to the correct file

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
