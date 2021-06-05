import { useState } from 'react';

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setLocalStorage];
}
