import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [value, setValue] = useState(false);
  const toggleCallback = useCallback(() => {
    setValue((current) => !current);
  }, []);
  return [value, toggleCallback, setValue];
};
