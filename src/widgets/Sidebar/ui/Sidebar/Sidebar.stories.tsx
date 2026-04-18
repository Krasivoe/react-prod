import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Sidebar } from './Sidebar';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
