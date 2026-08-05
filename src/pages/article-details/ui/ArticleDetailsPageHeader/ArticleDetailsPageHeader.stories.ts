import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { Article } from '@/entities/article';

const meta = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        position: 'initial',
    },
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'user',
    },
    title: 'Article title',
    subtitle: 'Article subtitle',
    img: '',
    views: 100,
    createdAt: '01.01.2024',
    type: [],
    blocks: [],
};

export const WithoutEditButton: Story = {
    parameters: {
        state: {
            user: {
                authData: {
                    id: '2',
                    username: 'other-user',
                },
            },
            articleDetails: {
                data: article,
            },
        },
    },
};

export const WithEditButton: Story = {
    parameters: {
        state: {
            user: {
                authData: {
                    id: '1',
                    username: 'user',
                },
            },
            articleDetails: {
                data: article,
            },
        },
    },
};
