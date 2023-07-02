import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, editAvatar } from './auth-operations';

const initialState = {
  
  user: { name: '', email: '', avatarURL: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
// register user
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)

// login user
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)

// editAvatar user
      .addCase(editAvatar.pending, (state, action) => state)
      .addCase(editAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        
      })
      .addCase(editAvatar.rejected, (state, action) => state)

// logout user
      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => state)

// refresh user
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
