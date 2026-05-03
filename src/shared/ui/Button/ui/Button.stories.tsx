import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Theme } from '@/app/providers/theme-provider';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { DefaultSize } from '@/shared/types/components';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        label: 'Button',
    },
};

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        label: 'Button',
    },
};

export const ClearInvertedDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        label: 'Button',
    },
};

export const OutlineXS: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        label: 'Button',
        size: DefaultSize.XS,
    },
};

export const OutlineS: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        label: 'Button',
        size: DefaultSize.S,
    },
};

export const OutlineL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        label: 'Button',
        size: DefaultSize.L,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: 'Button',
    },
};

export const BackgroundDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: 'Button',
    },
};

export const BackgroundInvertedDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        label: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: '>',
        square: true,
    },
};

export const SquareXS: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: '>',
        square: true,
        size: DefaultSize.XS,
    },
};

export const SquareS: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: '>',
        square: true,
        size: DefaultSize.S,
    },
};

export const SquareL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: '>',
        square: true,
        size: DefaultSize.L,
    },
};

export const SquareDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        label: '>',
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};
