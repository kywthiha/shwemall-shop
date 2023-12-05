import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import my_MM from "../lang/my-MM.json";
import { useRouter } from "next/router";
import { useState } from "react";
import { useGetCarts } from "@/features/carts/hooks/use-get-carts";
import StoreProvider from "@/lib/store/StoreProvider";

const messages = {
  en,
  "my-MM": my_MM,
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <StoreProvider>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </IntlProvider>
    </StoreProvider>
  );
}
