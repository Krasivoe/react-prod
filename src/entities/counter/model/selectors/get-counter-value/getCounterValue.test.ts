import { StateSchema } from '@/app/providers/store-provider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return value', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 },
        };

        const value = getCounterValue(state as StateSchema);

        expect(value).toEqual(10);
    });
});
