import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ThemeButton } from './Button';

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

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        label: 'Button',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        label: 'Button',
    },
};
