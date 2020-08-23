import { useState } from 'react';
export function useTransfer<T>(init: T[], initr: T[]) {
  const [left, setLeft] = useState<T[]>(init);
  const [right, setRight] = useState<T[]>(initr);
  return {
    left,
    right,
    handleRight: setRight,
    handleLeft: setLeft,
  };
}
