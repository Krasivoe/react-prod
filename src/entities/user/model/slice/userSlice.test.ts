import { userActions, userReducer } from './userSlice';
import { UserSchema } from '@/entities/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

describe('userSlice', () => {
    const mockUser = {
        id: 'test id',
        userName: 'test name',
    };

    beforeEach(() => {
        localStorage.clear();
    });

    describe('setAuthData', () => {
        test('should set auth data', () => {
            const action = userActions.setAuthData(mockUser);
            const newState = userReducer({}, action);

            expect(newState).toEqual({
                authData: mockUser,
            });
        });

        test('should override existing authData', () => {
            const state: UserSchema = {
                authData: { id: 'old', userName: 'olduser' },
            };
            const action = userActions.setAuthData(mockUser);
            const newState = userReducer(state, action);

            expect(newState.authData).toEqual(mockUser);
        });
    });

    describe('initAuthData', () => {
        test('should set authData from localStorage if user exists', () => {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(mockUser));

            const action = userActions.initAuthData();
            const newState = userReducer({}, action);

            expect(newState.authData).toEqual(mockUser);
        });

        test('should not set authData if localStorage is empty', () => {
            const action = userActions.initAuthData();
            const newState = userReducer({}, action);

            expect(newState.authData).toBeUndefined();
            expect(newState).toEqual({});
        });
    });

    describe('logout', () => {
        test('should clear authData and remove from localStorage', () => {
            const state: UserSchema = { authData: mockUser };
            const action = userActions.logout();
            const newState = userReducer(state, action);

            expect(newState.authData).toBeUndefined();
            expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toBeNull();
        });
    });
});
