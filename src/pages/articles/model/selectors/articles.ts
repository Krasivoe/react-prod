import { StateSchema } from '@/app/providers/store-provider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';
import { SortOrder } from '@/shared/types/sort';

export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading || false;

export const getArticlesError = (state: StateSchema) => state.articles?.error;

export const getArticlesView = (state: StateSchema) => state.articles?.view || ArticleView.SMALL;

export const getArticlesPage = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.articles?.limit || 9;
export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore || false;

export const getArticlesSort = (state: StateSchema) => state.articles?.sort ?? ArticleSortField.CREATED;
export const getArticlesOrder = (state: StateSchema) => state.articles?.order ?? SortOrder.ASC;
export const getArticlesType = (state: StateSchema) => state.articles?.type ?? ArticleType.ALL;
export const getArticlesSearch = (state: StateSchema) => state.articles?.search ?? '';

export const getArticlesMounted = (state: StateSchema) => state.articles?._mounted || false;
