import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { getArticlesHasMore, getArticlesIsLoading, getArticlesPage } from '../../selectors/articles';
import { articlesActions } from '../../slices/articlesSlice';
import { fetchArticlesList } from '../fetch-articles-list/fetchArticlesList';

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articles/fetchNextArticles',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMore = getArticlesHasMore(getState());
        const page = getArticlesPage(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            const nextPage = page + 1;

            dispatch(articlesActions.setPage(nextPage));

            dispatch(fetchArticlesList({
                page: nextPage,
            }));
        }
    },
);
