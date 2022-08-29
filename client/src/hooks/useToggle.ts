import { useCallback, useState } from 'react';

type ToggleFunction = () => [
  boolean,
  () => void,
  React.Dispatch<React.SetStateAction<boolean>>
];

export const useToggle: ToggleFunction = () => {
  const [value, setValue] = useState(false);
  const toggleCallback = useCallback(() => {
    setValue((current) => !current);
  }, []);
  return [value, toggleCallback, setValue];
};
