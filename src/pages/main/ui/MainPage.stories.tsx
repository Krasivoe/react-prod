import type { Meta, StoryObj } from '@storybook/react-webpack5';
import MainPage from './MainPage';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'pages/main',
    component: MainPage,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
