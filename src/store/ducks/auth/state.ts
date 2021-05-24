import { UserModel } from 'models/user';
import { LoadingState } from 'store/loadingState';

export interface AuthState {
  isAuthenticated: boolean;
  LoadingStatus: LoadingState;
  error: string[];
  currentUser: UserModel | null;
};
