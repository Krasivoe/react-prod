import { classNames } from '@/shared/lib/classNames/classNames';
import type { ValuesOf } from '@/shared/types/common';
import React, { type FC, type PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export const AppLinkTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

type AppLinkThemeValue = ValuesOf<typeof AppLinkTheme>;

interface AppLinkProps extends PropsWithChildren, LinkProps {
    className?: string;
    theme?: AppLinkThemeValue;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY
        , ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
