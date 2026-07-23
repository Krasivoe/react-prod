import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView, ArticleViewValue } from '@/entities/article';
import { ArticlesSchema } from '../types/articlesSchema';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorage';
import { fetchArticlesList } from '../services/fetch-articles-list/fetchArticlesList';
import { StateSchema } from '@/app/providers/store-provider';

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
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleViewValue>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleViewValue;

            state.view = view;
            state.limit = LIMIT_MAP[view];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
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
