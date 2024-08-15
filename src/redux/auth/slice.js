import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  logoutThunk,
  refreshUserThunk,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, acttion) => {
        state.user = acttion.payload.user;
        state.token = acttion.payload.token;
        state.isLogedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, acttion) => {
        state.user = acttion.payload.user;
        state.token = acttion.payload.token;
        state.isLogedIn = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLogedIn = true;
        state.isRefreshing = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const authReducer = slice.reducer;
