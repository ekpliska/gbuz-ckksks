import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from 'store/store';
import { fetchSignIn } from 'api/auth';
import { fetchUserProfile } from 'api/user';
import { SignInRequestModel } from 'models/api/api';
import { TokenModel } from 'models/api/token';
import { UserModel } from 'models/user';
import LocalStorageService from 'utils/LocalStorageService';
import actionsType from './constants';
import { setAuthError, setAuthLoading, setCurrentUser, setIsAuthenticated } from './authSlice';

export const fetchAuthSignIn = createAsyncThunk(actionsType.SET_IS_AUTHENTICATED, async (authPost: SignInRequestModel, { dispatch }) => {
  try {
    dispatch(setAuthLoading(true));
    const { data } = await fetchSignIn(authPost);
    LocalStorageService.clearToken();
    LocalStorageService.setToken(data as TokenModel);
    dispatch(setIsAuthenticated(true));
  } catch (error) {
    // TODO: fix
    dispatch(setAuthError(error.toString()));
  } finally {
    dispatch(setAuthLoading(false));
  }
});

export const authLogout = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCurrentUser(null));
    dispatch(setIsAuthenticated(false));
    LocalStorageService.clearToken();
  } catch (error) {
    // TODO: fix
    dispatch(setAuthError(error.toString()));
  }
};

export const fetchCurrentUser = createAsyncThunk(actionsType.SET_CURRENT_USER, async (_, { dispatch }) => {
  try {
    dispatch(setAuthLoading(true));
    const { data } = await fetchUserProfile();
    dispatch(setCurrentUser(data as UserModel));
  } catch (error) {
    // TODO: fix
    dispatch(setAuthError(error.toString()));
  } finally {
    dispatch(setAuthLoading(false));
  }
});
