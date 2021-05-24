import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AppDispatch, AppThunk } from 'store/store';
import { fetchSignIn } from 'api/auth';
import { fetchUserProfile } from 'api/user';
import { ApiError, SignInRequestModel } from 'models/api/api';
import { TokenModel } from 'models/api/token';
import { UserModel } from 'models/user';
import LocalStorageService from 'utils/LocalStorageService';
import {
  setAuthError,
  setAuthLoading,
  setCurrentUser,
  setIsAuthenticated,
} from './authSlice';
import actionsType from './constants';
import { LoadingState } from 'store/loadingState';

export const fetchAuthSignIn = createAsyncThunk(
  actionsType.SET_IS_AUTHENTICATED,
  async (authPost: SignInRequestModel, { dispatch }) => {
    try {
      dispatch(setAuthLoading(LoadingState.LOADING));
      const { data } = await fetchSignIn(authPost);
      LocalStorageService.clearToken();
      LocalStorageService.setToken(data as TokenModel);
      dispatch(setAuthLoading(LoadingState.LOADED));
      dispatch(setIsAuthenticated(true));
    } catch (error) {
      const err: AxiosError<ApiError> = error;
      dispatch(setAuthLoading(LoadingState.ERROR));
      dispatch(setAuthError(err.response?.data.errors as string[]));
    }
  },
);

export const authLogout = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCurrentUser(null));
    dispatch(setIsAuthenticated(false));
    LocalStorageService.clearToken();
  } catch (error) {
    const err: AxiosError<ApiError> = error;
    dispatch(setAuthLoading(LoadingState.ERROR));
    dispatch(setAuthError(err.response?.data.errors as string[]));
  }
};

export const fetchCurrentUser = createAsyncThunk(
  actionsType.SET_CURRENT_USER,
  async (_, { dispatch }) => {
    try {
      dispatch(setAuthLoading(LoadingState.LOADING));
      const { data } = await fetchUserProfile();
      dispatch(setCurrentUser(data as UserModel));
      dispatch(setAuthLoading(LoadingState.LOADED));
    } catch (error) {
      const err: AxiosError<ApiError> = error;
      dispatch(setAuthLoading(LoadingState.ERROR));
      dispatch(setAuthError(err.response?.data.errors as string[]));
    }
  },
);
