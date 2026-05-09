import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LoginForm } from './LoginForm';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
