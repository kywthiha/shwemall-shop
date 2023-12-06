import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "@/features/carts/slice/cartsSlice";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      carts: cartsReducer,
    },
  });

  return store;
};
