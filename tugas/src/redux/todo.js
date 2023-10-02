import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },

  reducers: {
    onAdd: (state, action) => {
      state.value = [...action.payload];
    },
    onDelete: (state, action) => {
      let newList = [...state.value];
      newList.splice(action.payload, 1)
      state.value = newList;
    },
    onDone: (state, action) => {
      let newList = [...state.value];
      newList[action.payload].isDone = !newList[action.payload].isDone;
      state.value = newList;
    },
  },
});

export const { onAdd, onDelete, onDone } = todoSlice.actions;
export default todoSlice.reducer;
