import { useRef } from 'react';

type useTimeoutT = (
    onTick: (value: string) => void,
    delay: number, // The delay before run, in milliseconds (1000 ms = 1 second)
) => {
    startTimeout: (value: string) => void;
    stopTimeout: () => void;
};

export const useTimeout: useTimeoutT = (onTick, delay = 0) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const startTimeout = (value: string): void => {
        if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
                onTick(value);
            }, delay);
        }
    };

    const stopTimeout = (): void => {
        if (timeoutRef && timeoutRef.current) {
            clearInterval(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    return {
        startTimeout,
        stopTimeout,
    };

    // TODO on AppStatechange
};
