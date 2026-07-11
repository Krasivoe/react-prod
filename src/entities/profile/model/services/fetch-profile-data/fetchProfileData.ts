import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>(`/profile/${id}`);

            return response.data;
        } catch (e) {
            const error = e as Error;

            return rejectWithValue(error.message);
        }
    },
);
