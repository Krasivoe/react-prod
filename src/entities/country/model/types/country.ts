import { ValuesOf } from '@/shared/types/common';

export const Country = {
    RUSSIA: 'Russia',
    BELARUS: 'Belarus',
    KAZAKHSTAN: 'Kazakhstan',
} as const;

export type CountryValue = ValuesOf<typeof Country>;
