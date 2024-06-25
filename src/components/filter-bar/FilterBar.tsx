import FilterByPriority from "../filter-by-priority";
import FilterByType from "../filter-by-type";
import * as S from "./styles";

const FilterBar = () => {
  return (
    <S.FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </S.FilterContainer>
  );
};

export default FilterBar;
