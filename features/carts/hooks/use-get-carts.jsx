import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCarts } from "@/lib/store/features/carts/cartsSlice";

export function useGetCarts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);
}
