import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { getArticlesMounted } from '../../selectors/articles';
import { articlesActions } from '../../slices/articlesSlice';
import { fetchArticlesList } from '../fetch-articles-list/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articles/initArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const mounted = getArticlesMounted(getState());

        if (mounted) return;

        dispatch(articlesActions.initState());

        dispatch(fetchArticlesList({
            page: 1,
        }));
    },
);
