import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Skeleton } from './Skeleton';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: 500,
        height: 200,
    },
};

export const PrimaryDark: Story = {
    args: {
        width: 500,
        height: 200,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    parameters: {
        theme: Theme.DARK,
    },
};
