import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        setData: (state, action) => {
        state.value = action.payload;
        },
    },
});


export const { setData } = cartSlice.actions;
export default cartSlice.reducer;