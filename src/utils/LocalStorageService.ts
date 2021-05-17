import { TokenModel } from 'models/api/token';
import { LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_REFRESH_TOKEN } from './constants';

const setToken = (tokenData: TokenModel): void => {
  window.localStorage.setItem(LOCAL_STORAGE_TOKEN, tokenData.access_token);
  window.localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, tokenData.refresh_token);
};

const getAccessToken = (): string | null => {
  return window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
};

const getRefreshToken = (): string | null => {
  return window.localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN);
};

const clearToken = (): void => {
  window.localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  window.localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN);
};

export default { setToken, getAccessToken, getRefreshToken, clearToken };