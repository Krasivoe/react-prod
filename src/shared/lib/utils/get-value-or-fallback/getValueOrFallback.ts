import { Maybe } from '@/shared/types/common';

export function getValueOrFallback(text: Maybe<string>, fallback?: string): string;
export function getValueOrFallback(text: Maybe<number>, fallback: number): number;
export function getValueOrFallback(
    text: Maybe<string | number>,
    fallback: string | number = '',
) {
    const isInvalidNumber = typeof text === 'number' && Number.isNaN(text);

    return isInvalidNumber ? fallback : (text ?? fallback);
}
