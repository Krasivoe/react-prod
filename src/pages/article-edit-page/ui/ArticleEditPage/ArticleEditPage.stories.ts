import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleEditPage from './ArticleEditPage';

const meta = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof ArticleEditPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Create: Story = {
    parameters: {
        route: '/articles/new',
        path: '/articles/new',
    },
};

export const Edit: Story = {
    parameters: {
        route: '/articles/1/edit',
        path: '/articles/:id/edit',
    },
};
