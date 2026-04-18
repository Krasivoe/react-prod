import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
