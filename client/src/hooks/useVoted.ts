/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from 'react';

export const useVoted = (value: number) => {
  const [vote, setVote] = useState(value);

  const defaultVote = useMemo(() => vote, []);

  const increaseVote = useCallback(() => {
    if (vote > defaultVote) return;
    setVote((prev) => prev + 1);
  }, [vote, defaultVote]);

  const decreaseVote = useCallback(() => {
    if (vote < defaultVote) return;
    setVote((prev) => prev - 1);
  }, [vote, defaultVote]);

  return [vote, increaseVote, decreaseVote];
};
