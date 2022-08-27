import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [isValid, setIsValid] = useState(false);
  const toggleCallback = useCallback(() => {
    setIsValid((current) => !current);
  }, []);
  return [isValid, toggleCallback];
};
