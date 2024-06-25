import { ReactNode, createContext, useContext, useState } from "react";
import { FilterContextProps, FilterType, PriorityType } from "./types";

const FilterContext = createContext<FilterContextProps>({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setPage: () => {},
  setSearch: () => {},
  setType: () => {},
  setPriority: () => {},
});

export const FilterContexProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.NEWS);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("You probally are not using provider");
  }

  return context;
};
