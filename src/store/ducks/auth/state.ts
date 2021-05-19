import { UserModel } from 'models/user';

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string[];
  currentUser: UserModel | null;
};
