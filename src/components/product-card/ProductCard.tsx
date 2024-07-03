import React from "react";
import { ProductProps } from "../../api/types";
import * as S from "./styles";
import { formatToReal } from "../../utils/formatToReal";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: ProductProps }) => {
  const navigate = useNavigate();
  return (
    <S.CardContainer onClick={() => navigate(`/product/${product.id}`)}>
      <div>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div>
        <S.ProdcutName>{product.name}</S.ProdcutName>
        <S.Price>{formatToReal(product.price_in_cents)}</S.Price>
      </div>
    </S.CardContainer>
  );
};

export default ProductCard;
