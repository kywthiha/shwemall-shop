import { axios } from "./axios";

const ENDPOINT = "/v1/shop-mobile/carts";

export async function getCarts(options) {
  const {
    data: { data },
  } = await axios.get(ENDPOINT, {
    ...options,
    headers: { ...options?.headers, "x-temp-user-id": "12345678" },
  });
  return data;
}

export async function updateCart({ productCode, quantity }, options) {
  const {
    data: { data },
  } = await axios.post(
    ENDPOINT,
    { productCode, quantity },
    {
      ...options,
      headers: { ...options?.headers, "x-temp-user-id": "12345678" },
    }
  );
  return data;
}
