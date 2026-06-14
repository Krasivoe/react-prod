import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from './Select';
import { DefaultSize } from '@/shared/types/components';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
    { value: '1', label: 'Первый пункт' },
    { value: '2', label: 'Второй пункт' },
    { value: '3', label: 'Третий пункт' },
];

export const Default: Story = {
    args: {
        label: 'Укажите значение',
        options,
    },
};

export const DefaultXS: Story = {
    args: {
        label: 'Укажите значение',
        size: DefaultSize.XS,
        options,
    },
};

export const DefaultS: Story = {
    args: {
        label: 'Укажите значение',
        size: DefaultSize.S,
        options,
    },
};

export const DefaultL: Story = {
    args: {
        label: 'Укажите значение',
        size: DefaultSize.L,
        options,
    },
};
