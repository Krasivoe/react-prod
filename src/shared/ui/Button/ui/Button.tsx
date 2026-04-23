import React, { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import type { ValuesOf } from '@/shared/types/common';
import cls from './Button.module.scss';

export const ThemeButton = {
    CLEAR: 'clear',
    OUTLINE: 'outline',
} as const;

type ThemeButtonValue = ValuesOf<typeof ThemeButton>;

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButtonValue;
    label?: string;
    onlyIcon?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        label,
        onlyIcon,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames((cls.button), { [cls.onlyIcon]: onlyIcon }, [className, cls[theme]])}
            {...otherProps}
        >
            {children ?? label}
        </button>
    );
};
