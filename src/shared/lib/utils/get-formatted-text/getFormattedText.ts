import { Maybe } from '@/shared/types/common';
import { DASH, EMPTY_TEXT } from '@/shared/constants/string';

export const getFormattedText = <T extends string | number>(
    text: Maybe<T>,
    useDash = false,
): T | string => {
    const emptyPlaceholder = useDash ? DASH : EMPTY_TEXT;

    if (text === 0 || text === '0') return text;

    if (!text) return emptyPlaceholder;

    return text;
};
