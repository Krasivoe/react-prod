import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';
import { AdditionalClasses, ClassMods, classNames } from '@/shared/lib/class-names/classNames';
import './styles.scss';
import { DefaultSize, DefaultSizeValue } from '@/shared/types/components';
import { ButtonTheme, ButtonThemeValue } from '@/shared/ui/Button/types';
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
        theme = ButtonTheme.OUTLINE,
        label,
        size = DefaultSize.M,
        onlyIcon,
        square,
        disabled,
        ...otherProps
    } = props;

    const mods: ClassMods = {
        'ui-button_only-icon': onlyIcon,
        'ui-button_square': square,
        'ui-button_disabled': disabled,
    };

    const additionalClasses: AdditionalClasses = [
        className,
        theme && `ui-button_theme_${theme}`,
        size && `ui-button_size_${size}`,
        UI_FOCUS_CLASS,
    ];

    return (
        <button
            type="button"
            className={classNames('ui-button', mods, additionalClasses)}
            disabled={disabled}
            {...otherProps}
        >
            {children ?? label}
        </button>
    );
});
