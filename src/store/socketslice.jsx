import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 users : [1],

 
};

const socketslice = createSlice({
  name: "socketslice",
  initialState,
  reducers: {
    fillusercomefromsocket: (state, action) => {
      state.users.push(action.payload);
    },

  }
});
// so socket slice
export const {fillusercomefromsocket } = socketslice.actions;
export default socketslice.reducer;
