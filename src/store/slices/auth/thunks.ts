import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../../api/services';
import { LoginCredentials } from '../../../utils/interfaces';

export const loginUser = createAsyncThunk('auth/login',
    async (credentials: LoginCredentials, { rejectWithValue }) => {
        try {
            const response = await authApi.login(credentials);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Login failed');
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData: any, { rejectWithValue }) => {
        try {
            const response = await authApi.register(userData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'Registration failed');
        }
    }
);

const createThunks = (builder: ActionReducerMapBuilder<any>): void => {
    builder
        .addCase(loginUser.pending, (state) => { })
        .addCase(loginUser.fulfilled, (state, action) => { })
        .addCase(loginUser.rejected, (state) => { })
}
export default createThunks;
