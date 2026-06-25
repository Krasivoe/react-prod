import { useContext } from 'react';
import {
    Theme,
    ThemeContext,
    type ThemeValue,
} from '@/app/providers/theme-provider/lib/ThemeContext';
import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemeValue;
}

export const useTheme = (): UseThemeResult => {
    const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ThemeValue;

        switch (theme as ThemeValue) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;

            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;

            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;

            default:
                newTheme = Theme.LIGHT;
                break;
        }

        setTheme?.(newTheme);

        document.body.className = newTheme;

        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
