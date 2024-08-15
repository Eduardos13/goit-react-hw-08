import { createSlice } from '@reduxjs/toolkit';

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
});

export const authReducer = slice.reducer;
