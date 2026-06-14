import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetch-profile-data/fetchProfileData';
import { updateProfileData } from '../services/update-profile-date/updateProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    isLoading: false,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.form = state.data;
            state.readonly = true;
            state.validateError = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(updateProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true;
                state.readonly = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateError = action.payload;
                state.readonly = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
