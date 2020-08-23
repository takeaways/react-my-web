import { useState, useCallback } from 'react';

export function useInput() {
  const [state, setState] = useState('');
  const handleEvent = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  }, []);
  return {
    value: state,
    handleValue: handleEvent,
  };
}
