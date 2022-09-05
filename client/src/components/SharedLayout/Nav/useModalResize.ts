import { RefObject, useCallback, useEffect, useState } from 'react';

interface InitialSize {
  width: string;
  height: string;
}
interface ResizeHookProps {
  initialSize: InitialSize;
  ref: RefObject<any>;
}

const useModalResize = ({ initialSize, ref }: ResizeHookProps) => {
  const [size, setSize] = useState(initialSize);

  const resizeModal = useCallback(() => {
    if (!ref.current) return;

    const width = ref.current.offsetWidth;

    setSize((prev) => {
      return { ...prev, width: `${width}px` };
    });
  }, [ref]);

  /* useEffect(() => {
    const handleResize = () => {
      if (!isFocused) return;
      resizeModal();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isFocused, resizeModal]); */

  return resizeModal;
};
