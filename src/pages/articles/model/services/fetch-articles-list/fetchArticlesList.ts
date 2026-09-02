import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Article, ArticleType } from '@/entities/article';
import {
    getArticlesLimit,
    getArticlesOrder,
    getArticlesPage,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../selectors/articles';
import { Undefinable } from '@/shared/types/common';
import { addQueryParams } from '@/shared/lib/url/add-query-params/addQueryParams';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    Undefinable<FetchArticlesListProps>,
    ThunkConfig<string>
>(
    'articles/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const page = getArticlesPage(getState());
        const limit = getArticlesLimit(getState());
        const sort = getArticlesSort(getState());
        const order = getArticlesOrder(getState());
        const type = getArticlesType(getState());
        const search = getArticlesSearch(getState());

        try {
            const typeParam = type === ArticleType.ALL ? undefined : type;

            addQueryParams({
                sort,
                order,
                type: typeParam,
                search,
            });

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    type: typeParam,
                    q: search,
                },
            });

            if (!response.data) throw new Error('data error');

            return response.data;
        } catch (e) {
            const error = e as Error;

            return rejectWithValue(error.message);
        }
    },
);
