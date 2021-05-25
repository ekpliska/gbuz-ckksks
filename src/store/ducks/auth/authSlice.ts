import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from 'models/user';
import { LoadingState } from 'store/loadingState';
import { LOCAL_STORAGE_TOKEN } from 'utils/constants';
import { AuthState } from './state';

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem(LOCAL_STORAGE_TOKEN),
  loadingStatus: LoadingState.NEVER,
  error: [],
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading(state: AuthState, { payload }: PayloadAction<LoadingState>) {
      state.loadingStatus = payload;
    },
    setAuthError(state: AuthState, { payload }: PayloadAction<string[]>) {
      state.error = payload;
    },
    authLogout(state: AuthState) {
      state.isAuthenticated = false;
      state.loadingStatus = LoadingState.NEVER;
      state.error = [];
      state.currentUser = null;
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
