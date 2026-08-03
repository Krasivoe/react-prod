import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleType } from '@/entities/article';
import { ArticlesTypeTabs } from './ArticlesTypeTabs';

const meta = {
    title: 'entities/Article/ArticlesTypeTabs',
    component: ArticlesTypeTabs,
} satisfies Meta<typeof ArticlesTypeTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: ArticleType.ALL,
        onChangeType: () => undefined,
    },
};
