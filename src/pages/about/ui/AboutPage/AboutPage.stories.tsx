import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AboutPage from './AboutPage';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'pages/about',
    component: AboutPage,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
