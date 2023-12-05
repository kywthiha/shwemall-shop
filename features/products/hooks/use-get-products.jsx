import { useInfiniteQuery, QueryClient } from "@tanstack/react-query";
import { getProducts } from "@/api/products";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  getNextPageParam,
  initialLimit,
  initialPageParam,
} from "@/lib/utils/react-query-pagination-utils";

const QUERY_KEY = "products";

const queryFn = ({ signal, pageParam }) =>
  getProducts({
    signal,
    params: {
      limit: initialLimit,
      ...pageParam,
    },
  });

export async function prefetchProducts(queryClient = new QueryClient()) {
  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn,
    initialPageParam,
    getNextPageParam,
  });
  return queryClient;
}

export function useGetProducts() {
  const { ref, inView } = useInView();

  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn,
    initialPageParam,
    getNextPageParam,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return {
    ref,
    data,
    status,
    hasNextPage,
  };
}
