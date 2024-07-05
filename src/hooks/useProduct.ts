import { useQuery } from "react-query";
import { api } from "../api/api";

export const useProduct = (id: string) => {
  const { data, isLoading } = useQuery({
    queryFn: () => api.getProduct(id),
    queryKey: ["product", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  const product = data?.data?.data?.Product;

  return {
    data: product,
    isLoading,
  };
};
