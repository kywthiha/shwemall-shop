import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCarts } from "@/features/carts/slice/cartsSlice";

export async function useGetCarts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);
}
