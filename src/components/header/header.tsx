import { useState } from "react";
import * as S from "./styles";
import PrimaryInputWSearchIcon from "../primary-input/primary-input";
import CartControl from "../cart-control";
import { useFilter } from "../../contexts/filter-context/filterContext";

const Header = () => {
  const { setSearch, search } = useFilter();
  return (
    <S.HeaderBackGround>
      <S.TagHeader>
        <S.Logo>Capputeeno</S.Logo>
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
