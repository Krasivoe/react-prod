import { useEffect } from 'react';
import { Theme } from '@/app/providers/theme-provider';
import { ThemeValue } from '@/app/providers/theme-provider/lib/ThemeContext';

// todo поменять логику навешивания темы для body элементов в будущем
export const useBodyTheme = (theme: string) => {
    const themes: ThemeValue[] = Object.values(Theme);

    useEffect(() => {
        const { body } = document;

        themes.forEach((themeClass) => {
            body.classList.remove(themeClass);
        });

        body.classList.add(theme);

        return () => {
            body.classList.remove(theme);
        };
    }, [theme, themes]);
};
