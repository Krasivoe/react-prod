import { memo, type PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { AdditionalClasses, classNames } from '@/shared/lib/class-names/classNames';
import type { ValuesOf } from '@/shared/types/common';
import './styles.scss';

export const AppLinkTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const;

type AppLinkThemeValue = ValuesOf<typeof AppLinkTheme>;

interface AppLinkProps extends PropsWithChildren, LinkProps {
    className?: string;
    theme?: AppLinkThemeValue;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    const additionalClasses: AdditionalClasses = [
        className,
        theme && `ui-app-link_theme_${theme}`,
    ];

    return (
        <Link
            to={to}
            className={classNames('ui-app-link', {}, additionalClasses)}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
