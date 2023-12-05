import { Button } from "@/features/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useProductCarts } from "../hooks/use-product-cart";

export function ProductItem({ product }) {
  const { productCart, decrementCart, incrementCart } = useProductCarts({
    product,
  });

  return (
    <Link
      href={`/products/${product.productCode}/${product.productName}`}
      passHref
    >
      <article className="flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-md  relative h-full">
        <div className="relative shrink-0">
          <Image
            src={product?.imageUrl || "https://picsum.photos/200/200"}
            alt="Picture of the author"
            width={100}
            height={100}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="absolute bottom-0 right-0 flex justify-content-between">
            <Button className="rounded-full" onClick={decrementCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
              </svg>
            </Button>
            <Button>{productCart?.quantity || "0"}</Button>
            <Button className="rounded-full" onClick={incrementCart}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="1">
                  <path
                    d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.5"
                  ></path>
                </g>
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
          <div className="mb-1 lg:mb-1.5 -mx-1">
            <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
              {product.price}
            </span>
          </div>
          <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
            {product.productName}
          </h2>
        </div>
      </article>
    </Link>
  );
}
