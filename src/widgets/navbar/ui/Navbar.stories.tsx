import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Navbar } from './Navbar';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'widgets/navbar',
    component: Navbar,
    parameters: {
        position: 'top',
    },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};

export const AuthNavbar: Story = {
    parameters: {
        theme: Theme.DARK,
        state: {
            user: { authData: {} },
        },
    },
};
