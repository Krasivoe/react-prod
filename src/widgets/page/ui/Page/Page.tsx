import {
    memo, PropsWithChildren, UIEvent, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/use-infinite_scroll/useInfiniteScroll';
import { Nullable } from '@/shared/types/common';
import { useAppDispatch } from '@/shared/lib/hooks/use-app-dispatch/useAppDispatch';
import { getScrollByPath, scrollSaveActions } from '@/features/scroll-save';
import { useInitialEffect } from '@/shared/lib/hooks/use-initial-effect/useInitialEffect';
import { StateSchema } from '@/app/providers/store-provider';
import { useThrottle } from '@/shared/lib/hooks/use-throttle/useThrottle';

interface PageProps extends PropsWithChildren {
    className?: string;
    onScrollEnd?: () => void;
}

const SCROLL_UPDATE_DELAY = 500;

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const { pathname } = useLocation();

    const wrapperRef = useRef<Nullable<HTMLElement>>(null);
    const triggerRef = useRef<Nullable<HTMLDivElement>>(null);

    const dispatch = useAppDispatch();

    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        if (wrapperRef.current) wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, SCROLL_UPDATE_DELAY);

    return (
        <section
            ref={wrapperRef}
            className={classNames('ui-page', {}, [className])}
            onScroll={onScroll}
        >
            {children}

            {onScrollEnd ? <div className="ui-page__scroll-trigger" ref={triggerRef} /> : null}
        </section>
    );
});
