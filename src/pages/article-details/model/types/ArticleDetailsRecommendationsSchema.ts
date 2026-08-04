import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
}
