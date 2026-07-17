import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Article } from '@/entities/article';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    undefined,
    ThunkConfig<string>
>(
    'articles/fetchArticlesList',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
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
