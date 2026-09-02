import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleSortField } from '@/entities/article';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: SortOrder.ASC,
        onChangeSort: () => undefined,
        onChangeOrder: () => undefined,
    },
};
