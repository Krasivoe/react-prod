import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from '@/app/providers/theme-provider';
import { ProfilePage } from '@/pages/profile';

const meta = {
    title: 'pages/profile',
    component: ProfilePage,
    parameters: {
        position: 'initial',
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
