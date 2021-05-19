import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from 'models/user';
import { LOCAL_STORAGE_TOKEN } from 'utils/constants';
import { AuthState } from './state';

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem(LOCAL_STORAGE_TOKEN),
  isLoading: false,
  error: [],
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading(state: AuthState, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    setAuthError(state: AuthState, { payload }: PayloadAction<string[]>) {
      state.error = payload;
    },
    authLogout(state: AuthState) {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = [];
    },
    setCurrentUser(state: AuthState, { payload }: PayloadAction<UserModel | null>) {
      state.currentUser = payload;
    },
    setIsAuthenticated(state: AuthState, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
  },
});

export const {
  setAuthLoading,
  setAuthError,
  authLogout,
  setCurrentUser,
  setIsAuthenticated,
} = authSlice.actions;

export default authSlice.reducer;
