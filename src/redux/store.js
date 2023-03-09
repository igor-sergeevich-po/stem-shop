import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
});
