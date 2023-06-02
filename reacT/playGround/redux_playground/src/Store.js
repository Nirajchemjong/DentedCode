import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./ResultSlice";

const store = configureStore({
  reducer: {
    dataForm: dataReducer,
  },
});

export default store;
