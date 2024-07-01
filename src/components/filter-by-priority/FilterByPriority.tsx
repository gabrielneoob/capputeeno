import { useState } from "react";
import { ArrowDownIcon } from "../icons/arrow-down-icon";
import * as S from "./styles";
import { useFilter } from "../../contexts/filter-context/filterContext";
import { PriorityType } from "../../contexts/filter-context/types";

const dataFilters = [
  { value: "NEWS", text: "Novidade" },
  { value: "BIGGEST_PRICE", text: "Preço: Maior - menor" },
  { value: "MINOR_PRICE", text: "Preço: Menor - maior" },
  { value: "POPULARITY", text: "Mais vendidos" },
];

const FilterByPriority = () => {
  const [isOpen, setIsopen] = useState(false);
  const { setPriority } = useFilter();

  const handleChangePriority = (value: string) => {
    switch (value) {
      case "NEWS":
        setPriority(PriorityType.NEWS);
        break;
      case "BIGGEST_PRICE":
        setPriority(PriorityType.BIGGEST_PRICE);
        break;
      case "MINOR_PRICE":
        setPriority(PriorityType.MINOR_PRICE);
        break;
      default:
        setPriority(PriorityType.POPULARITY);
    }
  };

  return (
    <S.FilterContainer>
      <p onClick={() => setIsopen((previous) => !previous)}>
        Organizar por
        <ArrowDownIcon />
      </p>
      {isOpen && (
        <S.PriorityFilter>
          {dataFilters.map((data) => (
            <li
              key={data.value}
              onClick={() => {
                handleChangePriority(data.value);
                setIsopen((previous) => !previous);
              }}
            >
              {data.text}
            </li>
          ))}
        </S.PriorityFilter>
      )}
    </S.FilterContainer>
  );
};

export default FilterByPriority;
