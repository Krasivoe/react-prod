import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    Article,
    ArticleSortField,
    ArticleSortFieldValue,
    ArticleType,
    ArticleTypeValue,
    ArticleView,
    ArticleViewValue,
} from '@/entities/article';
import { ArticlesSchema } from '../types/articlesSchema';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { fetchArticlesList } from '../services/fetch-articles-list/fetchArticlesList';
import { StateSchema } from '@/app/providers/store-provider';
import { SortOrder, SortOrderValue } from '@/shared/types/sort';

interface ArticlesFilters {
    order?: SortOrderValue;
    sort?: ArticleSortFieldValue;
    type?: ArticleTypeValue;
    search?: string;
}

const LIMIT_MAP: Record<ArticleViewValue, number> = {
    [ArticleView.BIG]: 4,
    [ArticleView.SMALL]: 9,
};

const articlesAdapter = createEntityAdapter<Article, string>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState(),
);

const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState: articlesAdapter.getInitialState<ArticlesSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        limit: 9,
        sort: ArticleSortField.CREATED,
        order: SortOrder.ASC,
        type: ArticleType.ALL,
        search: '',
        _mounted: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewValue>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setFilters: (state, action: PayloadAction<ArticlesFilters>) => {
            const {
                sort,
                order,
                type,
                search,
            } = action.payload;

            if (sort !== undefined) state.sort = sort;
            if (order !== undefined) state.order = order;
            if (type !== undefined) state.type = type;
            if (search !== undefined) state.search = search;

            state.page = 1;
            state.hasMore = true;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleViewValue ?? ArticleView.SMALL;

            state.view = view;
            state.limit = LIMIT_MAP[view];
            state._mounted = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg?.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg?.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articlesReducer,
    actions: articlesActions,
} = articlesSlice;
