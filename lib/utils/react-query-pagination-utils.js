import { convertObject } from "./search-params-utils";

export const getNextPageParam = (lastPage) => {
  if (lastPage?.meta?.next_page_url) {
    return convertObject(lastPage?.meta?.next_page_url);
  }
  return undefined;
};

export const initialPageParam = 1;

export const initialLimit = 20;