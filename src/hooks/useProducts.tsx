import { useQuery } from "react-query";
import { api } from "../api/api";
import { useFilter } from "../contexts/filter-context/filterContext";
import { mountQuery } from "../utils/graphql-filters";
import { useDeferredValue } from "react";

export const useProducts = () => {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data, isLoading } = useQuery({
    queryFn: () => api.getProduct(query),
    queryKey: ["products", type, priority],
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  return {
    data: filteredProducts,
    isLoading,
  };
};
