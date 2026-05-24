import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    const mockLoginState: DeepPartial<LoginSchema> = {
        username: 'name',
        password: 'password',
    };

    describe('username', () => {
        const mockUserName = 'test name';

        test('should set username', () => {
            const action = loginActions.setUsername(mockUserName);
            const newState = loginReducer(mockLoginState as LoginSchema, action);

            expect(newState).toMatchObject({ username: mockUserName });
        });

        test('should handle empty state', () => {
            const action = loginActions.setUsername(mockUserName);
            const newState = loginReducer(undefined, action);

            expect(newState).toMatchObject({ username: mockUserName });
        });
    });

    describe('password', () => {
        const mockPassword = 'test pass';

        test('should set password', () => {
            const action = loginActions.setPassword(mockPassword);
            const newState = loginReducer(mockLoginState as LoginSchema, action);

            expect(newState).toMatchObject({ password: mockPassword });
        });

        test('should handle empty state', () => {
            const action = loginActions.setPassword(mockPassword);
            const newState = loginReducer(undefined, action);

            expect(newState).toMatchObject({ password: mockPassword });
        });
    });
});
