import { useState, useCallback } from 'react';

export function useInput() {
  const [state, setState] = useState('');
  const handleEvent = useCallback((value: string) => {
    setState(value);
  }, []);
  return {
    value: state,
    handleValue: handleEvent,
  };
}
