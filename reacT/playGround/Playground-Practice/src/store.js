import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./DisplaySlice";
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
