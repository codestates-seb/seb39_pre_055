/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from 'react';

export const useVoted = (value: number) => {
  const [vote, setVote] = useState(value);

  const defaultValue = useMemo(() => value, []);

  const increaseVote = useCallback(() => {
    if (vote > defaultValue) return;
    setVote((prev) => prev + 1);
  }, [vote, defaultValue]);

  const decreaseVote = useCallback(() => {
    if (vote < defaultValue) return;
    setVote((prev) => prev - 1);
  }, [vote, defaultValue]);

  return [vote, increaseVote, decreaseVote];
};
