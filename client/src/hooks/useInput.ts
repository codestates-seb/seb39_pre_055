import { ChangeEvent, useCallback, useState } from 'react';

type InputFunction = (
  initialValue: string
) => [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
];

export const useInput: InputFunction = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};
