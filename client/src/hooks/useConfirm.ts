/* eslint-disable no-alert */
import { useCallback } from 'react';

type ConfirmFunction = (
  message: string,
  onConfirm: () => void,
  onCancel: () => void
) => () => void;

export const useConfirm: ConfirmFunction = (message, onConfirm, onCancel) => {
  const confirmAction = useCallback(() => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }, [message, onConfirm, onCancel]);
  return confirmAction;
};
