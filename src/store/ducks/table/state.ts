import { MeasuringInstrumentModel } from 'models/equipments/measuringInstrument';
import { TestEquipmentModel } from 'models/equipments/testEquipment';
import { AuxiliaryEquipmentModel } from 'models/equipments/auxiliaryEquipment';
import { StandardSampleModel } from 'models/equipments/standardSample';
import { IndustrialPremiseModel } from 'models/equipments/industrialPremise';
import { EmployeesModel } from 'models/equipments/employee';
import { PaginationModel } from 'models/pagination';
import { LoadingState } from 'store/loadingState';
import { OrderRequest } from 'models/api/filters';

export type TableContentDataTypes =
  | MeasuringInstrumentModel[]
  | TestEquipmentModel[]
  | AuxiliaryEquipmentModel[]
  | StandardSampleModel[]
  | IndustrialPremiseModel[]
  | EmployeesModel[]
  | null;

export enum TableSectionEntity {
  measuringInstrument = 'measuringInstrument',
  testEquipment = 'testEquipment',
  auxiliaryEquipment = 'auxiliaryEquipment',
  standardSample = 'standardSample',
  industrialPremise = 'industrialPremise',
  employee = 'employee',
};

export interface TableState {
  entity: TableSectionEntity | null,
  items: TableContentDataTypes;
  order: OrderRequest | null,
  pagination: PaginationModel;
  loadingStatus: LoadingState;
  error: string[];
}
