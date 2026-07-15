import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    className?: string;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(('ui-card'), {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
