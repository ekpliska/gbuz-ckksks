import { ApiResponse } from 'models/api/api';
import { axiosRequest } from '../config';

export const fetchDictionaries = async (): Promise<ApiResponse> => {
  const { data } = await axiosRequest.get<ApiResponse>('/v1/dictionary');
  return data;
};
