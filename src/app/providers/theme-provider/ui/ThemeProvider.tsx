import React, {
    type FC, type PropsWithChildren, ReactNode, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme,
    ThemeContext,
    type ThemeValue,
} from '@/app/providers/theme-provider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeValue || Theme.LIGHT;

interface ThemeProviderProps {
    children?: ReactNode;
    initialTheme?: ThemeValue;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;

    const [theme, setTheme] = useState<ThemeValue>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
