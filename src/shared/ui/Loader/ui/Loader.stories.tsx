import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Loader } from './Loader';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'shared/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
