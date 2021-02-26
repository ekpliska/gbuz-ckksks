interface IUserInfo {
  firstname: string;
  lastname: string;
  secondname?: string;
};

export interface UserBarProps {
  userInfo: IUserInfo;
};