import { ApiResponse } from 'models/api/api';
import { EquipmentsRequest } from 'models/api/equipments';

export interface EquipmentMethods {
  fetchAllData: (requestBody?: EquipmentsRequest) => Promise<ApiResponse>;
  fetchUpdateItem?: () => Promise<ApiResponse>;
  fetchGetItem?: () => Promise<ApiResponse>;
  fetchDeleteItem?: () => Promise<ApiResponse>;
}
