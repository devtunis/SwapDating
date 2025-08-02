import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";

const store = configureStore({
  reducer: {
    userslice: userslice,
    // other store
   
  }
});

export default store;
