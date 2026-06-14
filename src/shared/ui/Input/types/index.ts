import { ValuesOf } from '@/shared/types/common';

export const InputType = {
    TEXT: 'text',
    NUMBER: 'number',
} as const;

export type InputTypeValue = ValuesOf<typeof InputType>;
