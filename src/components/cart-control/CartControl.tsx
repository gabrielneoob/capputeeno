import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "../icons/shopping-bag-icon";
import * as S from "./styles";
import { useFilter } from "../../contexts/filter-context/filterContext";

const CartControl = () => {
  const { cart } = useFilter();
  const navigate = useNavigate();

  return (
    <S.CartWrapper onClick={() => navigate("/payment")}>
      <ShoppingBagIcon type="open-cart" />
      {cart && <S.CartCount>{cart.length}</S.CartCount>}
    </S.CartWrapper>
  );
};

export default CartControl;
