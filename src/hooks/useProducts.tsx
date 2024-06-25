import { useQuery } from "react-query";
import { api } from "../api/api";

export const useProducts = () => {
  const { data, isLoading } = useQuery({
    queryFn: () =>
      api.getProduct(`query {
  allProducts {
    name,
    description,
    image_url,
    id,
    price_in_cents,
    sales
  }
}`),
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data?.allProducts,
    isLoading,
  };
};
