import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // List of products in the cart
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload); // Add the product to the cart
        },
    },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
