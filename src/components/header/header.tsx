import { useState } from "react";
import * as S from "./styles";
import PrimaryInputWSearchIcon from "../primary-input/primary-input";
import CartControl from "../cart-control";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <S.HeaderBackGround>
      <S.TagHeader>
        <S.Logo>Capputeeno</S.Logo>
        <div>
          <PrimaryInputWSearchIcon
            placeholder="Procurando por algo específico?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <CartControl />
        </div>
      </S.TagHeader>
    </S.HeaderBackGround>
  );
};

export default Header;
