import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortFieldValue, ArticleViewValue } from '@/entities/article';
import { SortOrderValue } from '@/shared/types/sort';
import { ArticleTypeValue } from '@/entities/article/model/types/article';

export interface ArticlesSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;

    view: ArticleViewValue

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    sort: ArticleSortFieldValue;
    order: SortOrderValue;
    type: ArticleTypeValue,
    search: string;

    _mounted: boolean;
}
