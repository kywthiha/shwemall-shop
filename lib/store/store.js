import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./features/carts/cartsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      carts: cartsReducer,
    },
  });
};
