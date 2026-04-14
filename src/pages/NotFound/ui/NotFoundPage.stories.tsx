import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NotFoundPage } from './NotFoundPage';

const meta = {
    title: 'pages/NotFound',
    component: NotFoundPage,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
