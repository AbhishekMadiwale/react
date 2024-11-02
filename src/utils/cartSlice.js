import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    // State of the App
    initialState: {
        // items is an array
        items:[]
    },
    // Reducers are our functions
    reducers: {
        addItem:(state, action) => {
            // in state we are getting items
            // for action as we have array of items we will push the new data 
            // with the help of action.payload
            state.items.push(action.payload);
        },
        // we don't need action so we are not getting the action as a prop 
        // in below 2 reducers
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length= 0;
        }
    }
});

// Syntax provided from redux only
// in const we will write the actions which we want to export
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;