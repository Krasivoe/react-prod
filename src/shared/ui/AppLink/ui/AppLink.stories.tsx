import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/app/providers/ThemeProvider';

type AppLinkMeta = Meta<typeof AppLink>;

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'AppLink',
    },
} satisfies AppLinkMeta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
    parameters: {
        theme: Theme.DARK,
    },
};
