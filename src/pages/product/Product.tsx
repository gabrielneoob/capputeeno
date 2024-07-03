import { useParams } from "react-router-dom";
import * as S from "./styles";
import BackButton from "../../components/back-button/BackButton";
import { useProduct } from "../../hooks/useProduct";
import { formatToReal } from "../../utils/formatToReal";
import ShoppingBagIcon from "../../components/icons/shopping-bag-icon";
import { useFilter } from "../../contexts/filter-context/filterContext";

const Product = () => {
  const { id } = useParams();
  const { data } = useProduct(id as string);
  const { setCart } = useFilter();

  return (
    <S.Container>
      <div style={{ marginLeft: "2.5rem", padding: "1.5rem 0" }}>
        <BackButton path="/" />
      </div>
      <section>
        <img src={data?.image_url} alt="" />
        <div>
          <S.ProductInfo>
            <span>{data?.category}</span>
            <h2>{data?.name}</h2>
            <span>{formatToReal(data?.price_in_cents ?? 0)}</span>
            <p>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <div>
              <h3>Descrição</h3>
              <p>{data?.description}</p>
            </div>
          </S.ProductInfo>
          <S.BuyBtn
            onClick={() => {
              if (data) {
                setCart((previous) => {
                  return [...previous, data];
                });
              }
            }}
          >
            <ShoppingBagIcon type="add-cart" />
            <p>ADICIONAR AO CARRINHO</p>
          </S.BuyBtn>
        </div>
      </section>
    </S.Container>
  );
};

export default Product;
