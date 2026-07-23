import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewValue } from '@/entities/article';

export interface ArticlesSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;

    view: ArticleViewValue

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
}
