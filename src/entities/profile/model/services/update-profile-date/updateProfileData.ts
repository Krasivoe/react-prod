import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store-provider';
import { Profile, ValidateProfileError, ValidateProfileErrorValue } from '../../types/profile';
import { getProfileForm } from '../../selectors/get-profile-form/getProfileForm';
import { validateProfileData } from '../validate-profile-data/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileErrorValue[]>
>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);
        if (errors.length) return rejectWithValue(errors);

        try {
            const response = await extra.api.put<Profile>(
                `/profile/${formData!.id}`,
                formData,
            );

            if (!response.data) throw new Error('response error');

            return response.data;
        } catch {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
