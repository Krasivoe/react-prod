import React, {
    type FC, type PropsWithChildren, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme,
    ThemeContext,
    type ThemeValue,
} from '@/app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeValue || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeValue>(defaultTheme);

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
