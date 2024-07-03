import { ProductProps } from "../../api/types";

export enum FilterType {
  ALL = "ALL",
  SHIRT = "SHIRT",
  MUG = "MUG",
}

export enum PriorityType {
  POPULARITY = "POPULARITY",
  NEWS = "NEWS",
  MINOR_PRICE = "MINOR_PRICE",
  BIGGEST_PRICE = "BIGGEST_PRICE",
}

export interface FilterContextProps {
  search: string;
  page: number;
  type: FilterType;
  priority: PriorityType;
  cart: ProductProps[];
  setCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  setPriority: React.Dispatch<React.SetStateAction<PriorityType>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<FilterType>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
