import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getProductDetail } from "@/api/products";
import { ProductDetail } from "@/features/product-detail/components/product-detail";

export async function getServerSideProps(context) {
  if (context?.query?.slug?.length < 2) {
    return {
      notFound: true,
    };
  }

  const [productCode, productName] = context.query.slug;
  try {
    const product = await getProductDetail({ productCode });
    return {
      props: {
        product,
        productName,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default function Index({ product, productName }) {
  return (
    <main>
      <h1>{productName}</h1>
      <ProductDetail product={product} />
    </main>
  );
}
