import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { getUserAuthData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';
import { Comment } from '@/entities/comment';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) return rejectWithValue('no data');

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData?.id,
                text,
            });

            if (!response.data) throw new Error('response error');

            return {
                ...response.data,
                user: userData,
            };
        } catch {
            return rejectWithValue('error');
        }
    },
);
