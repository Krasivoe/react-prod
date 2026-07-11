import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../services/fetch-comments-by-article-id/fetchCommentsByArticleId';
import { Comment } from '@/entities/comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { StateSchema } from '@/app/providers/store-provider';
import { addCommentForArticle } from '../../model/services/add-comment-for-article/addCommentForArticle';

const commentsAdapter = createEntityAdapter<Comment, string>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

        builder
            .addCase(addCommentForArticle.fulfilled, (state, action: PayloadAction<Comment>) => {
                commentsAdapter.addOne(state, action.payload);
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
