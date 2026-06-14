import { validateProfileData } from './validateProfileData';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import { ValidateProfileError } from '../../types/profile';

const profile = {
    first: 'firstname',
    lastname: 'lastname',
    age: 1,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Tyumen',
    username: 'admin',
    avatar: '',
};

describe('validateProfileData', () => {
    test('should validate profile successfully', async () => {
        const result = validateProfileData(profile);

        expect(result).toEqual([]);
    });

    test('should return error when first and lastname are empty', async () => {
        const result = validateProfileData({ ...profile, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('should return error when incorrect age', async () => {
        const result = validateProfileData({ ...profile, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('should return error when country is empty', async () => {
        const result = validateProfileData({ ...profile, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('should return several errors when multiple fields are invalid', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('should return NO_DATA error when profile data is undefined', async () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
