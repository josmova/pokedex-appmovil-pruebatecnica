import { useEffect, useState } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 2000) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
/*     const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    }; */
    setDebouncedValue(input);

  }, [input, time]);

  return debouncedValue;
};
