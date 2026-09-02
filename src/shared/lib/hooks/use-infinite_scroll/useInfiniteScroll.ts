import { RefObject, useEffect } from 'react';
import { Nullable } from '@/shared/types/common';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    wrapperRef: RefObject<Nullable<HTMLElement>>;
    triggerRef: RefObject<Nullable<HTMLElement>>;
}

export const useInfiniteScroll = ({
    callback,
    wrapperRef,
    triggerRef,
}: UseInfiniteScrollOptions) => {
    useEffect(() => {
        let observer: Nullable<IntersectionObserver> = null;

        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback();
            }, options);

            if (triggerElement) observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) observer.unobserve(triggerElement);
        };
    }, [callback, triggerRef, wrapperRef]);
};
