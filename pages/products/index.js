import { Inter } from "next/font/google";
import { ProductList } from "@/features/products/components/product-list";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";
import Link from "next/link";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { prefetchProducts } from "@/features/products/hooks/use-get-products";
import { Button } from "@/features/ui/button";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const queryClient = await prefetchProducts();
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home({ dehydratedState }) {
  const changeTheme = (theme) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });

  return (
    <HydrationBoundary state={dehydratedState}>
      <main>
        <Head>
          <title>{title}</title>
        </Head>
        <div className="flex items-center mb-2 justify-between w-full h-full mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10 bg-primary text-primary-text">
          <a
            href=""
            className="inline-block focus:outline-none max-w-[131px] w-full -mt-1"
          >
            Shop
          </a>
          <div>
            <Button onClick={() => changeTheme("")}>
              <FormattedMessage id="navbar.theme1" />
            </Button>
            <Button onClick={() => changeTheme("theme1")}>
              <FormattedMessage id="navbar.theme2" />
            </Button>
            <Button onClick={() => changeTheme("theme2")}>
              <FormattedMessage id="navbar.theme3" />
            </Button>

            <div className="inline-flex gap-5">
              <Link key={"en"} href="/" locale={"en"}>
                <FormattedMessage id="navbar.en" />
              </Link>
              <Link key={"my-MM"} href="/" locale={"my-MM"}>
                <FormattedMessage id="navbar.my" />
              </Link>
            </div>
          </div>
        </div>

        <ProductList />
      </main>
    </HydrationBoundary>
  );
}
