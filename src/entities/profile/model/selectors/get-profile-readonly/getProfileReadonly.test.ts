import { StateSchema } from '@/app/providers/store-provider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        const readonly = getProfileReadonly(state as StateSchema);

        expect(readonly).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const readonly = getProfileReadonly(state as StateSchema);

        expect(readonly).toBe(false);
    });
});
