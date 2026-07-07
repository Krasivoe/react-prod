import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/user';
import { TestAsyncClass } from '@/shared/config/tests/test-async-thunk/TestAsyncClass';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);
const mockUser = { username: '123', password: '123' };

describe('loginByUsername', () => {
    test('success login', async () => {
        const userValue = { username: 'name', id: '1' };

        const thunk = new TestAsyncClass(loginByUsername);
        thunk.extra.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk(mockUser);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('login with error', async () => {
        const thunk = new TestAsyncClass(loginByUsername);
        thunk.extra.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(mockUser);

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.extra.navigate).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('response data error');
    });
});
