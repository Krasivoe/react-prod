import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import { Theme } from '@/app/providers/theme-provider';
import { TextSize, TextTheme } from '@/shared/ui/Text/types';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
        size: TextSize.L,
    },
};

export const Dark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
    },
};

export const TextError: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyTitleDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description description description description description',
    },
};

export const OnlyTextDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
    args: {
        text: 'Description description description description description',
    },
};
