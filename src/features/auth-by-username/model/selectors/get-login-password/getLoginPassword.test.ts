import { StateSchema } from '@/app/providers/store-provider';
import { DeepPartial } from '@/shared/types/tests';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'pass',
            },
        };

        const loginPassword = getLoginPassword(state as StateSchema);

        expect(loginPassword).toEqual('pass');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const loginPassword = getLoginPassword(state as StateSchema);

        expect(loginPassword).toEqual('');
    });
});
