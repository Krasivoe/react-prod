import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ThemeButton } from './Button';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        label: 'Button',
    },
};

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        label: 'Button',
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};
