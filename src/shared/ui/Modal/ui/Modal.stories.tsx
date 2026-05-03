import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda culpa, distinctio dolorem ducimus enim, harum id, illum impedit in necessitatibus numquam officiis possimus reiciendis reprehenderit repudiandae rerum vero voluptate.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda culpa, distinctio dolorem ducimus enim, harum id, illum impedit in necessitatibus numquam officiis possimus reiciendis reprehenderit repudiandae rerum vero voluptate.',
    },
    parameters: {
        theme: Theme.DARK,
    },
};
