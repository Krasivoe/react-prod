import React, { type ButtonHTMLAttributes, type FC, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './Button.module.scss';
import { DefaultSize, DefaultSizeValue } from '@/shared/types/components';
import { ButtonThemeValue } from '@/shared/ui/Button/types';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemeValue;
    label?: string;
    size?: DefaultSizeValue
    onlyIcon?: boolean;
    square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        label,
        size = DefaultSize.M,
        onlyIcon,
        square,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.onlyIcon]: onlyIcon,
        [cls.square]: square,
    };

    const additional: string[] = [className, cls[theme], cls[size]];

    return (
        <button
            type="button"
            className={classNames((cls.button), mods, additional)}
            {...otherProps}
        >
            {children ?? label}
        </button>
    );
};
