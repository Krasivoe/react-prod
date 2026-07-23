import { memo, PropsWithChildren, useRef } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/use-infinite_scroll/useInfiniteScroll';
import { Nullable } from '@/shared/types/common';

interface PageProps extends PropsWithChildren {
    className?: string;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef<Nullable<HTMLElement>>(null);
    const triggerRef = useRef<Nullable<HTMLDivElement>>(null);

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames('ui-page', {}, [className])}
        >
            {children}

            <div ref={triggerRef} />
        </section>
    );
});
