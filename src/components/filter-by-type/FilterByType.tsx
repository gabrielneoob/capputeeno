import { useState } from "react";
import * as S from "./styles";
import { useFilter } from "../../contexts/filter-context/filterContext";
import { FilterType } from "../../contexts/filter-context/types";

const listItems = [
  { text: "todos os produtos", type: "ALL" },
  { text: "camisetas", type: "SHIRT" },
  { text: "canecas", type: "MUG" },
];

const FilterByType = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { setType } = useFilter();

  return (
    <S.FilterList>
      {listItems.map((item, index) => (
        <S.FilterItem
          selecetd={index === currentIndex}
          key={index}
          onClick={() => {
            setType(item.type as unknown as FilterType);
            setCurrentIndex(index);
          }}
        >
          {item.text}
        </S.FilterItem>
      ))}
    </S.FilterList>
  );
};

export default FilterByType;
