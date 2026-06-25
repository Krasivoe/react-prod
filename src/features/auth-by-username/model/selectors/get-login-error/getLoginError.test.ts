import { StateSchema } from '@/app/providers/store-provider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };

        const loginError = getLoginError(state as StateSchema);

        expect(loginError).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const loginError = getLoginError(state as StateSchema);

        expect(loginError).toEqual(undefined);
    });
});
