import { ValuesOf } from '@/shared/types/common';

export const Currency = {
    RUB: 'RUB',
    EUR: 'EUR',
    USD: 'USD',
} as const;

export type CurrencyValue = ValuesOf<typeof Currency>;
