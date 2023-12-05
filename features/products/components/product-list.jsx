import { useGetProducts } from "../hooks/use-get-products";
import { ProductItem } from "./product-item";
import { Fragment, useEffect } from "react";

export function ProductList() {
  const { data, status, hasNextPage, ref } = useGetProducts();

  if (status === "pending") return "loading...";

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 md:gap-4 2xl:gap-5">
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.data.map((product) => (
            <ProductItem product={product} key={product.productCode} />
          ))}
        </Fragment>
      ))}

      {hasNextPage && <button ref={ref}>Load More</button>}
    </div>
  );
}
