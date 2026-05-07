import { createContext } from 'react';
import { ValuesOf } from '@/shared/types/common';

export const Theme = {
    LIGHT: 'app_light_theme',
    DARK: 'app_dark_theme',
} as const;

export type ThemeValue = ValuesOf<typeof Theme>;

export interface ThemeContextProps {
    theme?: ThemeValue;
    setTheme?: (theme: ThemeValue) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
