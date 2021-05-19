import { RoleModel } from 'models/role';
import { RootState } from 'store/rootReducer';
import { AuthState } from './state';

export const selectorAuth = (state: RootState): AuthState => state.auth;

export const selectIsAuthenticated = (state: RootState): AuthState['isAuthenticated'] => state.auth.isAuthenticated;

export const selectIsLoadingAuth = (state: RootState): AuthState['isLoading'] => state.auth.isLoading;

export const selectErrorAuth = (state: RootState): AuthState['error'] => state.auth.error;

export const selectCurrentUser = (state: RootState): AuthState['currentUser'] => state.auth.currentUser;

export const selectUserRole = (state: RootState): RoleModel[] | undefined | null => state.auth.currentUser?.userRoles;