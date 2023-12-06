import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";
import { useGetCarts } from "@/features/carts/hooks/use-get-carts";

const GlobalState = () => {
  useGetCarts();
  return null;
};

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {children}
      <GlobalState />
    </Provider>
  );
}
