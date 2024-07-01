import useLocalStorage from "../../hooks/useLocalStorage";
import ShoppingBagIcon from "../icons/shopping-bag-icon";
import * as S from "./styles";

const CartControl = () => {
  const { value } = useLocalStorage("CART-ITEMS");

  return (
    <S.CartWrapper>
      <ShoppingBagIcon />
      {value.length > 0 && <S.CartCount>{value.length}</S.CartCount>}
    </S.CartWrapper>
  );
};

export default CartControl;
