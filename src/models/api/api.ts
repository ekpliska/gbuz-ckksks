import { TokenModel } from './token';

export interface ApiResponse {
  data: TokenModel;
  success: boolean;
  status: number;
  error: string[];
}
