import type { ValuesOf } from '@/shared/types/common';

export const ButtonTheme = {
    CLEAR: 'clear',
    CLEAR_INVERTED: 'clearInverted',
    OUTLINE: 'outline',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

export type ButtonThemeValue = ValuesOf<typeof ButtonTheme>;
