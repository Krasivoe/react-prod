import type { Meta, StoryObj } from '@storybook/react-webpack5';
import LoginForm from './LoginForm';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const state = {
    loginForm: { username: 'user', password: 'pass' },
};

export const Primary: Story = {
    parameters: {
        state,
    },
};

export const PrimaryDark: Story = {
    parameters: {
        state,
        theme: Theme.DARK,
    },
};

export const WithError: Story = {
    parameters: {
        state: {
            loginForm: {
                ...state.loginForm,
                error: 'Некорректные данные',
            },
        },
        theme: Theme.DARK,
    },
};

export const Loading: Story = {
    parameters: {
        state: {
            loginForm: {
                ...state.loginForm,
                isLoading: true,
            },
        },
        theme: Theme.DARK,
    },
};
