import { ApiResponse } from 'models/api/api';
import { SignInRequestModel } from 'models/api/api';
import { axiosRequest } from '../config';

export const fetchSignIn = async (postData: SignInRequestModel): Promise<ApiResponse> => {
  const { data } = await axiosRequest.post<ApiResponse>('/v1/auth', postData);
  return data;
};