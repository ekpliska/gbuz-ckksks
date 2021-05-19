import { UserModel } from 'models/user';
import { DictionariesState } from 'store/ducks/dictionaries/state';
import { TokenModel } from './token';

type ResponseDataTypes = UserModel | TokenModel | DictionariesState | undefined;

export interface SignInRequestModel {
  username: string;
  password: string;
};

export interface ApiError<T = string[]> {
  errors: T;
  success: boolean;
};

export interface ApiResponse {
  data: ResponseDataTypes;
  success: boolean;
  status: number;
  error: ApiError;
}
