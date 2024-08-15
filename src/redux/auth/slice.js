import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, acttion) => {
      state.user = acttion.payload.user;
      state.token = acttion.payload.token;
      state.isLogedIn = true;
    });
  },
});

export const authReducer = slice.reducer;
