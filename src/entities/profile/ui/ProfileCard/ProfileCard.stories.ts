import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
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
};

export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
