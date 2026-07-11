import { Profile, ValidateProfileError } from '../../types/profile';
import { TestAsyncClass } from '@/shared/config/tests/test-async-thunk/TestAsyncClass';
import { updateProfileData } from './updateProfileData';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';

jest.mock('axios');

const mockProfile: Profile = {
    id: '1',
    first: 'firstname',
    lastname: 'lastname',
    age: 1,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Tyumen',
    username: 'admin',
    avatar: '',
};

describe('updateProfileData', () => {
    test('should update profile successfully', async () => {
        const thunk = new TestAsyncClass(updateProfileData, {
            profile: { form: mockProfile },
        });

        thunk.extra.api.put.mockReturnValue(Promise.resolve({ data: mockProfile }));
        const result = await thunk.callThunk();

        expect(thunk.extra.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('should reject with error when update profile fails', async () => {
        const thunk = new TestAsyncClass(updateProfileData, {
            profile: { form: mockProfile },
        });

        thunk.extra.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.extra.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncClass(updateProfileData, {
            profile: { form: { ...mockProfile, lastname: '' } },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
