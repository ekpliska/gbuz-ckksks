import { ApiResponse } from 'models/api/api';
import { TokenModel } from 'models/api/token';
import { SignInRequestModel } from 'models/api/auth';
import { axiosRequest } from './config';

export const signIn = async (postData: SignInRequestModel): Promise<ApiResponse> => {
  const { data } = await axiosRequest.post<ApiResponse>('/auth', postData);
  return data;
};

export const fetchRefreshToken = async ({ refresh_token }: Partial<TokenModel>): Promise<ApiResponse> => {
  return await axiosRequest.post('/auth/token', { refresh_token });
};