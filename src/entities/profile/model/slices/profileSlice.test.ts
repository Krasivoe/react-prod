import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import { updateProfileData } from '../services/update-profile-date/updateProfileData';

const mockProfile: Profile = {
    first: 'firstname',
    lastname: 'lastname',
    age: 1,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Tyumen',
    username: 'admin',
    avatar: '',
};

describe('profileSlice', () => {
    describe('readonly', () => {
        test('should set readonly', () => {
            const action = profileActions.setReadonly(true);
            const newState = profileReducer({ readonly: false } as ProfileSchema, action);

            expect(newState).toEqual({ readonly: true });
        });

        test('should handle empty state', () => {
            const action = profileActions.setReadonly(true);
            const newState = profileReducer(undefined, action);

            expect(newState.readonly).toBe(true);
        });
    });

    describe('cancelEdit', () => {
        test('should reset form to data', () => {
            const state: ProfileSchema = {
                data: mockProfile,
                form: { ...mockProfile, first: 'changed' },
                readonly: false,
                validateError: [ValidateProfileError.INCORRECT_USER_DATA],
            } as ProfileSchema;

            const action = profileActions.cancelEdit();
            const newState = profileReducer(state, action);

            expect(newState.form).toEqual(mockProfile);
            expect(newState.readonly).toBe(true);
            expect(newState.validateError).toBeUndefined();
        });

        test('should handle state without data', () => {
            const state: ProfileSchema = {
                data: undefined,
                form: undefined,
                readonly: false,
                validateError: [ValidateProfileError.SERVER_ERROR],
            } as ProfileSchema;

            const action = profileActions.cancelEdit();
            const newState = profileReducer(state, action);

            expect(newState.form).toBeUndefined();
            expect(newState.readonly).toBe(true);
            expect(newState.validateError).toBeUndefined();
        });

        test('should handle empty state', () => {
            const action = profileActions.cancelEdit();
            const newState = profileReducer(undefined, action);

            expect(newState.readonly).toBe(true);
            expect(newState.validateError).toBeUndefined();
        });
    });

    describe('updateProfile', () => {
        test('should merge profile data', () => {
            const updatedForm = { first: 'new', age: 30 };
            const state: ProfileSchema = {
                form: { ...mockProfile, first: 'old', age: 25 },
            } as ProfileSchema;

            const action = profileActions.updateProfile(updatedForm);
            const newState = profileReducer(state, action);

            expect(newState.form).toEqual({
                ...mockProfile,
                ...updatedForm,
            });
        });

        test('should handle empty form', () => {
            const updatedForm = { first: 'new' };
            const state: ProfileSchema = {
                form: undefined,
            } as ProfileSchema;

            const action = profileActions.updateProfile(updatedForm);
            const newState = profileReducer(state, action);

            expect(newState.form).toEqual(updatedForm);
        });

        test('should handle empty payload', () => {
            const state: ProfileSchema = {
                form: { ...mockProfile, first: 'old' },
            } as ProfileSchema;

            const action = profileActions.updateProfile({});
            const newState = profileReducer(state, action);

            expect(newState.form).toEqual({ ...mockProfile, first: 'old' });
        });
    });

    describe('updateProfileService', () => {
        test('pending', () => {
            const state = { isLoading: false, readonly: false } as ProfileSchema;
            const newState = profileReducer(state, updateProfileData.pending('', undefined));

            expect(newState.isLoading).toBe(true);
            expect(newState.readonly).toBe(true);
        });

        test('fulfilled', () => {
            const state = { isLoading: true } as ProfileSchema;
            const newState = profileReducer(state, updateProfileData.fulfilled(mockProfile, '', undefined));

            expect(newState.isLoading).toBe(false);
            expect(newState.data).toEqual(mockProfile);
            expect(newState.form).toEqual(mockProfile);
        });

        test('rejected', () => {
            const state = { isLoading: true, readonly: true } as ProfileSchema;
            const errors = [ValidateProfileError.SERVER_ERROR];
            const newState = profileReducer(state, updateProfileData.rejected(null, '', undefined, errors));

            expect(newState.isLoading).toBe(false);
            expect(newState.readonly).toBe(false);
            expect(newState.validateError).toEqual(errors);
        });
    });
});
