import { StateSchema } from '@/app/providers/store-provider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        const isLoading = getProfileIsLoading(state as StateSchema);

        expect(isLoading).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const isLoading = getProfileIsLoading(state as StateSchema);

        expect(isLoading).toBe(false);
    });
});
