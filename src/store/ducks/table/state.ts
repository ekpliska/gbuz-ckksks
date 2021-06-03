import {
  MeasuringInstrumentModel,
  TestEquipmentModel,
  AuxiliaryEquipmentModel,
  StandardSampleModel,
  IndustrialPremiseModel,
  EmployeesModel,
  EquipmentEntity,
} from 'models/equipments';
import { PaginationModel } from 'models/pagination';
import { LoadingState } from 'store/loadingState';
import { OrderRequest } from 'models/api/filters';

export type TableRecordTypes =
  | MeasuringInstrumentModel
  | TestEquipmentModel
  | AuxiliaryEquipmentModel
  | StandardSampleModel
  | IndustrialPremiseModel
  | EmployeesModel;

export interface TableState {
  entity: EquipmentEntity | null;
  items: TableRecordTypes[] | undefined;
  order: OrderRequest | null;
  pagination: PaginationModel | undefined;
  loadingStatus: LoadingState;
  error: string[];
}
