import { useState, useCallback } from 'react';

interface Select<T> {
  [key: string]: T;
}

export function useSelect<T>(select: Select<T>) {
  const [state, setState] = useState<Select<T>>(select);

  const handleEvent = useCallback((item: { value: T; name: string }) => {
    const { value, name } = item;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return {
    select: state,
    handleSelect: handleEvent,
  };
}
