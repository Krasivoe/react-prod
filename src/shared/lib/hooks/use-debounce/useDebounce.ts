import { useCallback, useRef } from 'react';

type Callback = (...args: any[]) => void;

export const useDebounce = <T extends Callback>(callback: T, delay: number) => {
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

    return useCallback((...args: Parameters<T>) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            callback(...args);

            timer.current = undefined;
        }, delay);
    }, [callback, delay]);
};
