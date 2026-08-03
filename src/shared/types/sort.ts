import { ValuesOf } from '@/shared/types/common';

export const SortOrder = {
    ASC: 'asc',
    DESC: 'desc',
} as const;

export type SortOrderValue = ValuesOf<typeof SortOrder>;
