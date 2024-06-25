export enum FilterType {
  "ALL",
  "SHIRT",
  "MUG",
}

export enum PriorityType {
  "POPULARITY",
  "NEWS",
  "MINOR_PRICE",
  "BIGGEST_PRICE",
}

export interface FilterContextProps {
  search: string;
  page: number;
  type: FilterType;
  priority: PriorityType;
  setPriority: React.Dispatch<React.SetStateAction<PriorityType>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<FilterType>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
