import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/article';
import { Theme } from '@/app/providers/theme-provider';

const meta = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InitWithTiled: Story = {
    args: {
        view: ArticleView.SMALL,
        onViewClick: () => undefined,
    },
};

export const InitWithList: Story = {
    args: {
        view: ArticleView.BIG,
        onViewClick: () => undefined,
    },
};

export const Dark: Story = {
    args: {
        view: ArticleView.SMALL,
        onViewClick: () => undefined,
    },
    parameters: {
        theme: Theme.DARK,
    },
};
