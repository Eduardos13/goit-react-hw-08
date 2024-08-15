import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../../config/goitApi';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post('users/signup', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
