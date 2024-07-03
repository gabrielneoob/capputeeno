import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context/filterContext";
import ShoppingBagIcon from "../icons/shopping-bag-icon";
import * as S from "./styles";

const CartControl = () => {
  const { cart } = useFilter();
  const navigate = useNavigate();

  return (
    <S.CartWrapper onClick={() => navigate("/payment")}>
      <ShoppingBagIcon type="open-cart" />
      {cart.length > 0 && <S.CartCount>{cart.length}</S.CartCount>}
    </S.CartWrapper>
  );
};

export default CartControl;
