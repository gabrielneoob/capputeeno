import { useFilter } from "../../contexts/filter-context/filterContext";
import { CartItemProps } from "../../pages/payment/Payment";
import { formatToReal } from "../../utils/formatToReal";
import { TrashIcon } from "../icons/Group";
import * as S from "./styles";

const CartProduct = ({ cartItem }: { cartItem: CartItemProps }) => {
  const { cart, setCart } = useFilter();

  const totalItems = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleRemoveItem = (id: string) => {
    const cartItems = [...cart];
    if (cartItems) {
      const newCartItemsArray = cartItems.filter((item) => item.id !== id);
      setCart(newCartItemsArray);
    }
  };

  const handleUpdateQuantity = (quantity: number, id: string) => {
    const currenCart = [...cart];
    const currenCartIndex = currenCart.findIndex((item) => item.id === id);
    currenCart[currenCartIndex].quantity = quantity;
    setCart(currenCart);
  };

  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={cartItem.image_url} alt="" />
      </S.ImageWrapper>
      <S.ProductDetials>
        <div>
          <h3>{cartItem.name}</h3>
          <div onClick={() => handleRemoveItem(cartItem.id)}>
            <TrashIcon />
          </div>
        </div>
        <p>{cartItem.description}</p>
        <div>
          <select
            name=""
            id=""
            defaultValue={cartItem.quantity}
            onChange={(e) =>
              handleUpdateQuantity(Number(e.target.value), cartItem.id)
            }
          >
            {totalItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p>{formatToReal(cartItem.price_in_cents)}</p>
        </div>
      </S.ProductDetials>
    </S.Container>
  );
};

export default CartProduct;
