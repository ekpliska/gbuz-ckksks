import { UserModel } from 'models/user';
import { LoadingState } from '../LoadingState';

export interface UserState {
  profile: UserModel | null;
  status: LoadingState;
  error: string[] | null;
};
