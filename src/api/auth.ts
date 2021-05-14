import { SignInRequestModel } from '../models/api/auth';
import { axiosRequest } from './config';

interface IToken {
  token: string;
};

export const fetchToken = async ({ username, password }: SignInRequestModel): Promise<IToken> => {
  const result: IToken = await axiosRequest.post('/auth', { username, password });
  return result;
};