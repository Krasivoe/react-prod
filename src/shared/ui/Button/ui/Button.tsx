import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/class-names/classNames';
import cls from './Button.module.scss';
import { DefaultSize, DefaultSizeValue } from '@/shared/types/components';
import { ButtonThemeValue } from '@/shared/ui/Button/types';
import { UI_FOCUS_CLASS } from '@/shared/constants/common';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemeValue;
    label?: string;
    size?: DefaultSizeValue
    onlyIcon?: boolean;
    square?: boolean;
    disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        label,
        size = DefaultSize.M,
        onlyIcon,
        square,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.onlyIcon]: onlyIcon,
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    const additional: string[] = [className, cls[theme], cls[size], UI_FOCUS_CLASS];

    return (
        <button
            type="button"
            className={classNames((cls.button), mods, additional)}
            disabled={disabled}
            {...otherProps}
        >
            {children ?? label}
        </button>
    );
});
