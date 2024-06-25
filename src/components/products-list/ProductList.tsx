import * as S from "./styles";
import ProductCard from "../product-card/ProductCard";

import { useProducts } from "../../hooks/useProducts";

const ProductsList = () => {
  const { data } = useProducts();

  return (
    <S.ProductsContainer>
      {data?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </S.ProductsContainer>
  );
};

export default ProductsList;
