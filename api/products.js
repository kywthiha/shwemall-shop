import { axios } from "./axios";

const ENDPOINT = "/v1/shop-mobile/products";

export async function getProducts(options) {
  const {
    data: { data },
  } = await axios.get(ENDPOINT, options);
  return data;
}

export async function getProductDetail({ productCode }) {
  const {
    data: { data },
  } = await axios.get(`${ENDPOINT}/${productCode}`);
  return data;
}
