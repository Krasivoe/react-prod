import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'pages/not-found',
    component: NotFoundPage,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
