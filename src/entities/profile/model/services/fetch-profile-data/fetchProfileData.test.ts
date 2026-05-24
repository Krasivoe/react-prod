import axios from 'axios';
import { Profile } from '../../types/profile';
import { Currency } from '@/shared/types/model';
import { TestAsyncClass } from '@/shared/config/tests/test-async-thunk/TestAsyncClass';
import { fetchProfileData } from '@/entities/profile';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);
const mockProfile: Profile = {
    first: 'firstname',
    lastname: 'lastname',
    age: 1,
    currency: Currency.RUB,
    country: 'Russia',
    city: 'Tyumen',
    username: 'admin',
    avatar: '',
};

describe('fetchProfileData', () => {
    test('should fetch profile successfully', async () => {
        const thunk = new TestAsyncClass(fetchProfileData);
        thunk.extra.api.get.mockReturnValue(Promise.resolve({ data: mockProfile }));
        const result = await thunk.callThunk();

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockProfile);
    });

    test('should reject with error when fetch fails', async () => {
        const errorMsg = 'response data error';

        const thunk = new TestAsyncClass(fetchProfileData);
        thunk.extra.api.get.mockRejectedValue(new Error(errorMsg));
        const result = await thunk.callThunk();

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual(errorMsg);
    });
});
