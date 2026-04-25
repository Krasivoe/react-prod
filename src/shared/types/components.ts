import { ValuesOf } from '@/shared/types/common';

export const DefaultSize = {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
} as const;

export type DefaultSizeValue = ValuesOf<typeof DefaultSize>;
