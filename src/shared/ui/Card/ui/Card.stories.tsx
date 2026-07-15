import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';
import { Text } from '@/shared/ui/Text';

const meta = {
    title: 'shared/Card',
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
};
