import { getProductDetail } from "@/api/products";
import { ProductDetail } from "@/features/product-detail/components/product-detail";
import { NextSeo } from "next-seo";

export async function getServerSideProps({ res, query }) {
  if (query?.slug?.length < 2) {
    return {
      notFound: true,
    };
  }

  const [productCode, productName] = query.slug;
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
    <>
      <NextSeo title={productName} description={productName} />
      <main>
        <h1>{productName}</h1>
        <ProductDetail product={product} />
      </main>
    </>
  );
}
