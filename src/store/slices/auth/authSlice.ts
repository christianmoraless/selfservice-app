import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './state';
import createThunks from './thunks';
import * as reducers from './reducers';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: reducers,
  extraReducers(builder) {
    createThunks(builder);
  },
});


export default authSlice.reducer;