import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import LocalStorageService from '../utils/LocalStorageService';
import { ApiResponse } from 'models/api/api';
import { fetchRefreshToken } from './auth';

const token = LocalStorageService.getAccessToken();

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

axiosRequest.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const customConfig = { ...config };
    const token = LocalStorageService.getAccessToken();
    if (token) {
      customConfig['headers']['Authorization'] = `Bearer ${token}`;
    }
    return customConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    const refreshToken = LocalStorageService.getRefreshToken();

    if (
      error.response?.status === 401 &&
      originalRequest.url === '/v1/auth/token'
    ) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && refreshToken) {
      const response = await fetchRefreshToken({ refresh_token: refreshToken });
      if (response.status === 201) {
        LocalStorageService.setToken(response.data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${LocalStorageService.getAccessToken()}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);
