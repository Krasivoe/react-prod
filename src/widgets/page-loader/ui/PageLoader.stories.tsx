import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { PageLoader } from './PageLoader';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'widgets/page-loader',
    component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
