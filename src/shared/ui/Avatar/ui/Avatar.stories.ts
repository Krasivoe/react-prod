import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Avatar } from './Avatar';
import avatarImg from '@/shared/assets/tests/storybook.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 100,
        src: avatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: avatarImg,
    },
};
