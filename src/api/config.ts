import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from 'store/store';
import { setCurrentUser, setIsAuthenticated } from 'store/ducks/auth/authSlice';
import { ApiResponse } from 'models/api/api';
import LocalStorageService from 'utils/LocalStorageService';

const logout = (): void => {
  store.dispatch(setCurrentUser(null));
  store.dispatch(setIsAuthenticated(false));
};

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
    if (error.response && error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  },
);
