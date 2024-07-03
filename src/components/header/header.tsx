import * as S from "./styles";
import PrimaryInputWSearchIcon from "../primary-input/primary-input";
import CartControl from "../cart-control";
import { useFilter } from "../../contexts/filter-context/filterContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { setSearch, search } = useFilter();
  const navigate = useNavigate();
  return (
    <S.HeaderBackGround>
      <S.TagHeader>
        <S.Logo onClick={() => navigate("/")}>Capputeeno</S.Logo>
        <div>
          <PrimaryInputWSearchIcon
            placeholder="Procurando por algo específico?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CartControl />
        </div>
      </S.TagHeader>
    </S.HeaderBackGround>
  );
};

export default Header;
