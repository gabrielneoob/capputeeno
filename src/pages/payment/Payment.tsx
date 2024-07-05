import BackButton from "../../components/back-button/BackButton";
import * as S from "./styles";
import { ProductProps } from "../../api/types";
import { formatToReal } from "../../utils/formatToReal";
import CartProduct from "../../components/cart-product/CartProduct";
import { useFilter } from "../../contexts/filter-context/filterContext";

export interface CartItemProps extends ProductProps {
  quantity: number;
}

const Payment = () => {
  // const [cart] = useLocalStorage<CartItemProps[]>("CART_ITEMS", []);
  const { cart } = useFilter();

  const calculateTotal = (value: CartItemProps[]) => {
    return value
      .map(({ price_in_cents, quantity }) => {
        return {
          price: price_in_cents * quantity,
          quantity,
        };
      })
      .reduce((previous, current) => {
        return {
          price: previous.price + current.price,
          quantity: previous.quantity + current.quantity,
        };
      });
  };

  return (
    <S.Container>
      <div>
        <BackButton path={-1} />

        <S.CartList>
          <div>
            <h3>Seu carrinho</h3>
            <p>
              Total ({cart.length > 0 ? calculateTotal(cart).quantity : "0"}{" "}
              produtos){" "}
              <span>
                {cart.length > 0
                  ? formatToReal(calculateTotal(cart).price)
                  : formatToReal(0)}
              </span>
            </p>
          </div>
          {cart && (
            <ul>
              {cart.map((cartItem) => {
                return <CartProduct cartItem={cartItem} key={cartItem.id} />;
              })}
            </ul>
          )}
        </S.CartList>
      </div>
      <S.PaymentResume>
        <div>
          <h3>RESUMO DO PEDIDO</h3>
          <div>
            <p>Subtotal de produtos </p>
            <span>
              {cart.length > 0
                ? formatToReal(calculateTotal(cart).price)
                : formatToReal(0)}
            </span>
          </div>
          <div>
            <p>Entrega </p>
            <span>R$ 40,00</span>
          </div>
          <hr />
          <S.Total>
            <p>Total </p>
            <span>
              {cart.length > 0
                ? formatToReal(calculateTotal(cart).price + 4000)
                : formatToReal(0)}
            </span>
          </S.Total>

          <button disabled={cart.length === 0}>FINALIZAR A COMPRA</button>
        </div>

        <ul>
          <li>
            <a href="#">AJUDA</a>
          </li>
          <li>
            <a href="#">REEMBOLSOS</a>
          </li>
          <li>
            <a href="#">ENTREGAS E FRETE</a>
          </li>
          <li>
            <a href="#">TROCAS E DEVOLUÇÕES</a>
          </li>
        </ul>
      </S.PaymentResume>
    </S.Container>
  );
};

export default Payment;
