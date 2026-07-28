import { useCallback, useRef } from 'react';

type Callback = (...args: any[]) => void;

export const useThrottle = <T extends Callback>(callback: T, delay: number) => {
    const isWaiting = useRef(false);

    return useCallback((...args: Parameters<T>) => {
        if (isWaiting.current) return;

        isWaiting.current = true;
        callback(...args);

        setTimeout(() => {
            isWaiting.current = false;
        }, delay);
    }, [callback, delay]);
};
