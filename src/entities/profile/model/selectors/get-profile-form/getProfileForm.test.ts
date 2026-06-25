import { StateSchema } from '@/app/providers/store-provider';
import { Profile } from '../../types/profile';
import { getProfileForm } from './getProfileForm';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';

const mockProfileForm: Profile = {
    first: 'firstname',
    lastname: 'lastname',
    age: 1,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Tyumen',
    username: 'admin',
    avatar: '',
};

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: mockProfileForm,
            },
        };

        const form = getProfileForm(state as StateSchema);

        expect(form).toMatchObject(mockProfileForm);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        const form = getProfileForm(state as StateSchema);

        expect(form).toBeUndefined();
    });
});
