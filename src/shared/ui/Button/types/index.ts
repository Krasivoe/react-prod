import type { ValuesOf } from '@/shared/types/common';

export const ButtonTheme = {
    CLEAR: 'clear',
    OUTLINE: 'outline',
    BACKGROUND: 'background',
} as const;

export type ButtonThemeValue = ValuesOf<typeof ButtonTheme>;
