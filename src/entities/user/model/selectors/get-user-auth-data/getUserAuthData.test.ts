import { DeepPartial } from '@/shared/types/tests';
import { StateSchema } from '@/app/providers/store-provider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    const mockAuthData = { id: '1', userName: 'name' };

    test('should return authData', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: mockAuthData },
        };

        const authData = getUserAuthData(state as StateSchema);

        expect(authData).toEqual({
            id: '1',
            userName: 'name',
        });
    });
});
