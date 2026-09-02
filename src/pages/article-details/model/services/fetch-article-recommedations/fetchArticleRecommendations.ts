import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Article } from '@/entities/article';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleRecommendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
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
