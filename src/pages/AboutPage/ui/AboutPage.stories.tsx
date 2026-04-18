import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AboutPage from './AboutPage';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'pages/AboutPage',
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
