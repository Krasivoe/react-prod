import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentList } from './CommentList';

const avatar1 = 'https://i.pinimg.com/originals/a7/08/84/a708844ad1e257878ff9f2acc19a38e4.jpg?nii=t';
const avatar2 = 'https://i.pinimg.com/originals/2c/e1/24/2ce1240a17226a34e3f1d6a3eb88217f.png?nii=t';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'first comment text',
                user: { id: '1', username: 'Alex', avatar: avatar1 },
            },
            {
                id: '2',
                text: 'second comment text',
                user: { id: '1', username: 'Bred', avatar: avatar2 },
            },
        ],
    },
};

export const Empty: Story = {
    args: {
        comments: [],
    },
};
