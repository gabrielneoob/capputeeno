import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "./types";

const getProduct = async (
  query: string
): AxiosPromise<ProductsFetchResponse> => {
  const response = await axios.post("http://localhost:3333", {
    query,
  });
  return response;
};

export const api = {
  getProduct,
};
