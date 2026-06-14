import { Undefinable } from '@/shared/types/common';

export type ClassMods = Record<string, Undefinable<string | boolean>>;

export type AdditionalClasses = Undefinable<string | boolean>[];

export const classNames = (cls: string, mode: ClassMods = {}, additional: AdditionalClasses = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
        .filter(([_, value]) => !!value)
        .map(([className]) => className),
].join(' ');
