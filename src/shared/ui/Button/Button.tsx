import React, { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { ValuesOf } from '@/shared/types/common';
import cls from './Button.module.scss';

export const ThemeButton = {
    CLEAR: 'clear',
} as const;

type ThemeButtonValue = ValuesOf<typeof ThemeButton>;

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButtonValue;
    label?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        label,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames((cls.button), {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children ?? label}
        </button>
    );
};
