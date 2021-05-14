import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse } from 'models/api/api';
import { LOCAL_STORAGE_TOKEN } from '../utils/constants';

const getAccessToken = (): string | null => {
  return window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
};

const token = getAccessToken();

const authConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
  },
};

export const axiosRequest = axios.create({
  baseURL: location.origin,
  withCredentials: true,
  ...authConfig,
});

axiosRequest.interceptors.request.use(function (config: AxiosRequestConfig) {
  const customConfig = { ...config };

  const token = getAccessToken();
  if (token) {
    customConfig['headers']['Authorization'] = `Bearer ${token}`;
  }

  return customConfig;
});

axiosRequest.interceptors.response.use(
  function (response: AxiosResponse<ApiResponse>) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
