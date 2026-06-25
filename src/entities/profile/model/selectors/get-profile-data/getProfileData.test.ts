import { StateSchema } from '@/app/providers/store-provider';
import { Profile } from '../../types/profile';
import { getProfileData } from './getProfileData';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';

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

describe('getProfileData', () => {
    test('should return profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: mockProfile,
            },
        };

        const profile = getProfileData(state as StateSchema);

        expect(profile).toMatchObject(mockProfile);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const profile = getProfileData(state as StateSchema);

        expect(profile).toBeUndefined();
    });
});
