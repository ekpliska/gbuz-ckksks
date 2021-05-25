import { ApiResponse } from 'models/api/api';
import { axiosRequest } from '../config';

export const fetchUserProfile = async (): Promise<ApiResponse> => {
  const { data } = await axiosRequest.get<ApiResponse>('/v1/user/current');
  return data;
};
