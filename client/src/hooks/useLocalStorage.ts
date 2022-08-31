import { useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (x: T) => void] {
  const [data, setData] = useState<T>(() => {
    const storageData = JSON.parse(localStorage.getItem(key) || '');

    return storageData || initialValue;
  });

  const setLocalStorage = (value: T) => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
      setData(value);
    }
  };

  return [data, setLocalStorage];
}
