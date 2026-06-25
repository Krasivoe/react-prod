import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from '@/app/providers/theme-provider';
import { ProfilePage } from '@/pages/profile';
import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

const meta = {
    title: 'pages/profile',
    component: ProfilePage,
    parameters: {
        position: 'column',
        state: {
            profile: {
                form: {
                    username: 'admin',
                    first: 'alex',
                    lastname: 'krimston',
                    age: 22,
                    city: 'Tyumen',
                    country: Country.RUSSIA,
                    currency: Currency.RUB,
                    avatar,
                },
            },
        },
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
