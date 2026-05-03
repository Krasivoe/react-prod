import { createContext } from 'react';
import { ValuesOf } from '@/shared/types/common';

export const Theme = {
    LIGHT: 'normal',
    DARK: 'dark',
} as const;

export type ThemeValue = ValuesOf<typeof Theme>;

export interface ThemeContextProps {
    theme?: ThemeValue;
    setTheme?: (theme: ThemeValue) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
