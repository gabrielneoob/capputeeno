import SearchIcon from "../icons/search-icon";
import * as S from "./styles";
import { PrimaryInput } from "./types";

export const PrimaryInputWSearchIcon = ({
  placeholder,
  css,
  onChange,
  value,
}: PrimaryInput) => {
  const style: React.CSSProperties = { ...css };
  return (
    <S.InputContainer>
      <S.PrimaryInput
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        value={value}
      />
      <SearchIcon />
    </S.InputContainer>
  );
};

export default PrimaryInputWSearchIcon;
