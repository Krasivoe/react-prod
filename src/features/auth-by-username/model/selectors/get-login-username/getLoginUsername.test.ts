import { StateSchema } from '@/app/providers/store-provider';
import { DeepPartial } from '@/shared/types/tests';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
            },
        };

        const loginUsername = getLoginUsername(state as StateSchema);

        expect(loginUsername).toEqual('name');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const loginUsername = getLoginUsername(state as StateSchema);

        expect(loginUsername).toEqual('');
    });
});
