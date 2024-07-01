import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "./types";

const getProduct = async (
  query: string
): AxiosPromise<ProductsFetchResponse> => {
  return await axios.post("http://localhost:3333", {
    query,
  });
};

export const api = {
  getProduct,
};
