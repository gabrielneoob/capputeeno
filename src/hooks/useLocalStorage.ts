import { useState } from "react";

const useLocalStorage = (item: string) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(item) as string) ?? ""
  );

  const updateLocalStorage = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(value));
  };

  return {
    value,
    updateLocalStorage,
  };
};

export default useLocalStorage;
