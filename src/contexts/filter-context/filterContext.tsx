import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { FilterContextProps, FilterType, PriorityType } from "./types";
import { ProductProps } from "../../api/types";
import useLocalStorage from "../../hooks/useLocalStorage";

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
  const [cart, setCart] = useState<ProductProps[]>(
    JSON.parse(localStorage.getItem("CART_COUNT") ?? "[]")
  );
  const [_currentCart, setCurrentCart] = useLocalStorage<ProductProps[]>(
    "CART_COUNT",
    cart
  );

  useEffect(() => {
    if (cart.length > 0) {
      setCurrentCart(cart);
    }
  }, [cart]);

  console.log(cart);

  return (
    <FilterContext.Provider
      value={{
        cart,
        setCart,
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
