import React from 'react';
import { Theme, useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/class-names/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            onlyIcon
            className={classNames('', {}, [className])}
        >
            {
                theme === Theme.DARK
                    ? <DarkIcon />
                    : <LightIcon />
            }
        </Button>
    );
}
