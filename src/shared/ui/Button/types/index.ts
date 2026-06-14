import type { ValuesOf } from '@/shared/types/common';

export const ButtonTheme = {
    CLEAR: 'clear',
    CLEAR_INVERTED: 'clear-inverted',
    OUTLINE: 'outline',
    OUTLINE_RED: 'outline-red',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'background-inverted',
} as const;

export type ButtonThemeValue = ValuesOf<typeof ButtonTheme>;
