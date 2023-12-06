import { addToCarts, selectCarts } from "@/features/carts/slice/cartsSlice";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useProductCarts({ product }) {
  const { data: carts } = useSelector(selectCarts);
  const dispatch = useDispatch();

  const productCart = useMemo(
    () =>
      (carts || []).find((item) => item.productCode === product?.productCode),
    [product, carts]
  );

  const decrementCart = () => {
    if (+productCart?.quantity) {
      dispatch(
        addToCarts({
          productCode: product.productCode,
          quantity: +(productCart?.quantity || 0) - 1,
        })
      );
    }
  };

  const incrementCart = () => {
    dispatch(
      addToCarts({
        productCode: product.productCode,
        quantity: +(productCart?.quantity || 0) + 1,
      })
    );
  };

  return { productCart, decrementCart, incrementCart };
}
