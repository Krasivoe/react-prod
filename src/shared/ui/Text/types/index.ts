import { ValuesOf } from '@/shared/types/common';

export const TextTheme = {
    PRIMARY: 'primary',
    ERROR: 'error',
} as const;

export type TextThemeValue = ValuesOf<typeof TextTheme>

export const TextAlign = {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
} as const;

export type TextAlignValue = ValuesOf<typeof TextAlign>;

export const TextSize = {
    M: 'm',
    L: 'l',
};

export type TextSizeValue = ValuesOf<typeof TextSize>
