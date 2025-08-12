import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import socketslice from "./socketslice"

const store = configureStore({
  reducer: {
    userslice: userslice,
    socketslice : socketslice
    // other store
   
  }
});

export default store;
