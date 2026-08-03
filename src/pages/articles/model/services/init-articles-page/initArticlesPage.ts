import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { getArticlesMounted } from '../../selectors/articles';
import { articlesActions } from '../../slices/articlesSlice';
import { fetchArticlesList } from '../fetch-articles-list/fetchArticlesList';
import { SortOrderValue } from '@/shared/types/sort';
import { ArticleSortFieldValue, ArticleTypeValue } from '@/entities/article';
import { Nullable } from '@/shared/types/common';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articles/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const mounted = getArticlesMounted(getState());
        if (mounted) return;

        const sort = searchParams.get('sort') as Nullable<ArticleSortFieldValue>;
        const order = searchParams.get('order') as Nullable<SortOrderValue>;
        const type = searchParams.get('type') as Nullable<ArticleTypeValue>;
        const search = searchParams.get('search');

        dispatch(articlesActions.setFilters({
            sort: sort ?? undefined,
            order: order ?? undefined,
            type: type ?? undefined,
            search: search ?? undefined,
        }));

        dispatch(articlesActions.initState());

        dispatch(fetchArticlesList());
    },
);
