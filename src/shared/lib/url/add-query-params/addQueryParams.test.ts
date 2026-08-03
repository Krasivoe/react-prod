import { expect } from '@playwright/test';
import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('should set param', () => {
        const data = { test: 'value' };

        const params = getQueryParams(data);

        expect(params).toBe('?test=value');
    });

    test('should set multiple params', () => {
        const data = { test: 'value', id: '2' };

        const params = getQueryParams(data);

        expect(params).toBe('?test=value&id=2');
    });

    test('should work with undefined params', () => {
        const data = { test: 'value', id: undefined };

        const params = getQueryParams(data);

        expect(params).toBe('?test=value');
    });
});
