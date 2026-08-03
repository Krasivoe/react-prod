import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticlesPage from './ArticlesPage';
import { Article, ArticleView } from '@/entities/article';

const meta = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
} satisfies Meta<typeof ArticlesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

const articles: Article[] = [
    {
        id: '1',
        title: 'Биоинформатика и поиск лекарств',
        subtitle: 'Как вычисления ускоряют проверку перспективных молекул',
        img: 'https://el-ed.ru/wp-content/uploads/2025/10/image-26-1024x585.png?v=1760083204',
        views: 1197,
        user: { id: '1', username: 'Petya' },
        createdAt: '23.04.2021',
        type: [
            'SCIENCE',
            'IT',
        ],
        blocks: [
            {
                id: '10-1',
                type: 'IMAGE',
                src: 'https://avatars.mds.yandex.net/i?id=4ab809cb6af27c90b87cb20f847606fa_l-6332308-images-thumbs&n=13',
                title: 'Схема вычислительного отбора молекул',
            },
        ],
    },
    {
        id: '2',
        title: 'DevOps-метрики для продуктовой команды',
        subtitle: 'Какие показатели помогают выпускать изменения быстрее и стабильнее',
        img: 'https://baltmove.ru/wp-content/uploads/2021/09/devops-material-of-baltmove-1-1024x575.png',
        views: 1542,
        user: { id: '1', username: 'Petya' },
        createdAt: '02.12.2022',
        type: [
            'IT',
        ],
        blocks: [
            {
                id: '11-1',
                type: 'TEXT',
                title: 'Метрики без бюрократии',
                paragraphs: [
                    'Частота деплоев, время восстановления и доля неудачных релизов показывают, насколько команда контролирует поставку изменений.',
                    'Важно смотреть на тренд, а не превращать числа в формальную отчётность без связи с пользовательским эффектом.',
                ],
            },
        ],
    },
];

export const SmallView: Story = {
    parameters: {
        state: {
            articles: {
                ids: articles.map((article) => article.id),
                entities: {
                    1: articles[0],
                    2: articles[1],
                },
                view: ArticleView.SMALL,
            },
        },
    },
};

export const BigView: Story = {
    parameters: {
        state: {
            articles: {
                ids: articles.map((article) => article.id),
                entities: {
                    1: articles[0],
                    2: articles[1],
                },
                view: ArticleView.BIG,
            },
        },
    },
};

export const Empty: Story = {
    parameters: {
        state: {
            articles: {
                ids: [],
                entities: {},
            },
        },
    },
};
