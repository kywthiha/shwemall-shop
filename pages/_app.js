import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import my_MM from "../lang/my-MM.json";
import { useRouter } from "next/router";
import { useState } from "react";
import StoreProvider from "@/lib/store/StoreProvider";
import Script from "next/script";

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
          <Script id="data-theme" strategy="beforeInteractive">
            {` document.querySelector("html")?.setAttribute("data-theme", localStorage.getItem("data-theme"))`}
          </Script>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </IntlProvider>
    </StoreProvider>
  );
}
