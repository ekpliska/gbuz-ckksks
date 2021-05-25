import { UserModel } from 'models/user';
import { DictionariesState } from 'store/ducks/dictionaries/state';
import { EquipmentsResponse } from './equipments';
import { TokenModel } from './token';

type ResponseDataTypes =
  | UserModel
  | TokenModel
  | DictionariesState
  | EquipmentsResponse
  | undefined;

export interface SignInRequestModel {
  username: string;
  password: string;
}

export interface ApiError<T = string[]> {
  errors: T;
  success: boolean;
}

export interface ApiResponse {
  data: ResponseDataTypes;
  success: boolean;
  status: number;
  error: ApiError;
}
