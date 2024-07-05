import { useState } from "react";

// Defina os tipos genéricos
function useLocalStorage<T>(key: string, initialValue: T) {
  // Função para obter o valor inicial do localStorage
  const getInitialValue = (): T => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue) as T;
    }

    return initialValue;
  };

  // useState com o valor inicial obtido do localStorage
  const [storedValue, setStoredValue] = useState<T>(getInitialValue);

  // Função para atualizar o valor no localStorage e no estado
  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
