import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';
import { Theme } from '@/app/providers/theme-provider';
import { TextTheme } from '@/shared/ui/Text/types';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        position: 'initial',
    },
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
    },
};

export const PrimaryDark: Story = {
    parameters: {
        position: 'initial',
        theme: Theme.DARK,
    },
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
    },
};

export const TextError: Story = {
    parameters: {
        position: 'initial',
    },
    args: {
        title: 'Title lorem ipsun',
        text: 'Description description description description description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    parameters: {
        position: 'initial',
    },
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyTitleDark: Story = {
    parameters: {
        position: 'initial',
        theme: Theme.DARK,
    },
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText: Story = {
    parameters: {
        position: 'initial',
    },
    args: {
        text: 'Description description description description description',
    },
};

export const OnlyTextDark: Story = {
    parameters: {
        position: 'initial',
        theme: Theme.DARK,
    },
    args: {
        text: 'Description description description description description',
    },
};
