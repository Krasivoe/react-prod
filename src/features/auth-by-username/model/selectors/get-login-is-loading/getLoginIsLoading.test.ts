import { StateSchema } from '@/app/providers/store-provider';
import { DeepPartial } from '@/shared/types/tests';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginLoading', () => {
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        const loginLoading = getLoginIsLoading(state as StateSchema);

        expect(loginLoading).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const loginLoading = getLoginIsLoading(state as StateSchema);

        expect(loginLoading).toEqual(false);
    });
});
