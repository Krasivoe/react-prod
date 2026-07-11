import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentCard } from './CommentCard';

const avatar = 'https://i.pinimg.com/736x/19/fc/9c/19fc9c8583020e327bfceff047590523.jpg';

const meta = {
    title: 'entities/comment/CommentCard',
    component: CommentCard,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'comment text',
            user: { id: '1', username: 'Alex', avatar },
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
