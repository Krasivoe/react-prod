import React, { type PropsWithChildren, useMemo, useState } from 'react';
import { Theme, ThemeContext, type ThemeValue } from '@/app/providers/theme-provider/lib/ThemeContext';
import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';

const defaultTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as ThemeValue || Theme.LIGHT;

interface ThemeProviderProps extends PropsWithChildren {
    initialTheme?: ThemeValue;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        children,
        initialTheme,
    } = props;

    const [theme, setTheme] = useState<ThemeValue>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    document.body.className = theme;

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
