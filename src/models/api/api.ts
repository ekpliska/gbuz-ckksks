import { UserModel } from 'models/user';
import { TokenModel } from './token';

type ResponseDataTypes = UserModel | TokenModel | undefined;

export interface SignInRequestModel {
  username: string;
  password: string;
};

export interface ApiResponse {
  data: ResponseDataTypes;
  success: boolean;
  status: number;
  error: string[];
}
