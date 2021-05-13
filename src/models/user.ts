import { EmployeesModel } from './equipments/employee';
import { RoleModel } from './role';

export interface UserModel {
  id?: number;
  username: string;
  status: number | string;
  createdAt: string;
  updatedAt: string;
  userRoles: RoleModel[] | null;
  employee: EmployeesModel | null;
}
