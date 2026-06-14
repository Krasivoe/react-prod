import { StateSchema } from '@/app/providers/store-provider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateError', () => {
    test('should return validate error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.NO_DATA],
            },
        };

        const validateError = getProfileValidateErrors(state as StateSchema);

        expect(validateError).toEqual([ValidateProfileError.NO_DATA]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const validateError = getProfileValidateErrors(state as StateSchema);

        expect(validateError).toEqual([]);
    });
});
