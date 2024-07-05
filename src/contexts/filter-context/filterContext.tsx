import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FilterContextProps, FilterType, PriorityType } from "./types";
import { CartItemProps } from "../../pages/payment/Payment";

const FilterContext = createContext<FilterContextProps>({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setPage: () => {},
  setSearch: () => {},
  setType: () => {},
  setPriority: () => {},
  cart: [],
  setCart: () => {},
});

export const FilterContexProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.POPULARITY);
  const [cart, setCart] = useState<CartItemProps[]>(
    JSON.parse(localStorage.getItem("CART_ITEMS") ?? "[]")
  );

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("CART_ITEMS", JSON.stringify(cart));
    }
    console.log({ cart });
  }, [cart]);

  const contextValue = useMemo(
    () => ({
      search,
      page,
      type,
      priority,
      setPage,
      setSearch,
      setType,
      setPriority,
      cart,
      setCart,
    }),
    [cart, page, priority, search, type]
  );

  return (
    <FilterContext.Provider value={contextValue}>
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
