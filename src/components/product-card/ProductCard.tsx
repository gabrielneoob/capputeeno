import React from "react";
import { ProductProps } from "../../api/types";
import * as S from "./styles";
import { formatToReal } from "../../utils/formatToReal";

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <S.CardContainer>
      <div>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div>
        <S.ProdcutName>{product.name}</S.ProdcutName>
        <S.Price>{formatToReal(product.price_in_cents / 100)}</S.Price>
      </div>
    </S.CardContainer>
  );
};

export default ProductCard;
