import { StateSchema } from '@/app/providers/store-provider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
