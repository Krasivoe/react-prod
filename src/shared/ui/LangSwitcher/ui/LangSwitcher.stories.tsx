import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LangSwitcher } from './LangSwitcher';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
