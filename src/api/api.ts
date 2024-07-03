import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse, ProductsFetchResponse } from "./types";

const getProducts = async (
  query: string
): AxiosPromise<ProductsFetchResponse> => {
  return await axios.post("http://localhost:3333", {
    query,
  });
};

export const getProduct = async (
  id: string
): AxiosPromise<ProductFetchResponse> => {
  return await axios.post("http://localhost:3333", {
    query: `query {
  Product(id: "${id}"){
    id,
    name,
    image_url,
    price_in_cents,
    description,
    category
  }
}`,
  });
};

export const api = {
  getProducts,
  getProduct,
};
