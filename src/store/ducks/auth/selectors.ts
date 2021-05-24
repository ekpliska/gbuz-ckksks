import { RoleModel } from 'models/role';
import { LoadingState } from 'store/loadingState';
import { RootState } from 'store/rootReducer';
import { AuthState } from './state';

export const selectorAuth = (state: RootState): AuthState => state.auth;

export const selectorIsAuthenticated = (state: RootState): AuthState['isAuthenticated'] => state.auth.isAuthenticated;

export const selectorIsLoading = (state: RootState): boolean => state.auth.LoadingStatus === LoadingState.LOADING;

export const selectorIsLoaded = (state: RootState): boolean => state.auth.LoadingStatus === LoadingState.LOADED;

export const selectorLoadingStatus = (state: RootState): AuthState['LoadingStatus'] => state.auth.LoadingStatus;

export const selectorErrorAuth = (state: RootState): AuthState['error'] => state.auth.error;

export const selectorCurrentUser = (state: RootState): AuthState['currentUser'] => state.auth.currentUser;

export const selectorUserRole = (state: RootState): RoleModel[] | undefined | null => state.auth.currentUser?.userRoles;