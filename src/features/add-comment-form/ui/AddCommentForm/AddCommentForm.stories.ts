import type { Meta, StoryObj } from '@storybook/react-webpack5';
import AddCommentForm from './AddCommentForm';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSendComment: () => undefined,
    },
};
