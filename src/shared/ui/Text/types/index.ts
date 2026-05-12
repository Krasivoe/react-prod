import { ValuesOf } from '@/shared/types/common';

export const TextTheme = {
    PRIMARY: 'primary',
    ERROR: 'error',
} as const;

export type TextThemeValue = ValuesOf<typeof TextTheme>
