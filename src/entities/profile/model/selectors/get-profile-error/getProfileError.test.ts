import { StateSchema } from '@/app/providers/store-provider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };

        const error = getProfileError(state as StateSchema);

        expect(error).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const error = getProfileError(state as StateSchema);

        expect(error).toEqual('');
    });
});
