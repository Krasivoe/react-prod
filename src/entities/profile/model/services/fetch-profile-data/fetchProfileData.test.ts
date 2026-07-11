import { Profile } from '../../types/profile';
import { TestAsyncClass } from '@/shared/config/tests/test-async-thunk/TestAsyncClass';
import { fetchProfileData } from './fetchProfileData';
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

describe('fetchProfileData', () => {
    test('should fetch profile successfully', async () => {
        const thunk = new TestAsyncClass(fetchProfileData);
        thunk.extra.api.get.mockReturnValue(Promise.resolve({ data: mockProfile }));
        const result = await thunk.callThunk('1');

        expect(thunk.extra.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('should reject with error when fetch fails', async () => {
        const errorMsg = 'response data error';

        const thunk = new TestAsyncClass(fetchProfileData);
        thunk.extra.api.get.mockRejectedValue(new Error(errorMsg));
        const result = await thunk.callThunk('1');

        expect(thunk.extra.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(errorMsg);
    });
});
