import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "watchporn",
  id: null,
  referfce: null,
  username: null
};

const userslice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    loginuser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.referfce = action.payload.referfce;
      state.username = action.payload.username;
    },
    logoutuser: (state) => {
      state.email = null;
      state.id = null;
      state.referfce = null;
      state.username = null;
    }
  }
});

export const { loginuser, logoutuser } = userslice.actions;
export default userslice.reducer;
