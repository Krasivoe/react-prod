import { StateSchema } from '@/app/providers/store-provider';
import { getUserMounted } from './getUserMounted';

describe('getUserMounted', () => {
    test('should return _mounted', () => {
        const state: DeepPartial<StateSchema> = {
            user: { _mounted: true },
        };

        const mounted = getUserMounted(state as StateSchema);

        expect(mounted).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const mounted = getUserMounted(state as StateSchema);

        expect(mounted).toBe(false);
    });
});
