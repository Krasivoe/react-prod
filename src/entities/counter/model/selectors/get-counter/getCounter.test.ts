import { getCounter } from './getCounter';
import { StateSchema } from '@/app/providers/store-provider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 },
        };

        const counter = getCounter(state as StateSchema);

        expect(counter).toEqual({ value: 10 });
    });
});
