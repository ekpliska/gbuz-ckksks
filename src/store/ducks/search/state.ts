import { LoadingState } from 'store/loadingState';
import { EquipmentEntity } from 'models/equipments';
import { SelectValue } from 'ui/Inputs/Select/types';

export interface Field {
  [name: string]: string | number | boolean | SelectValue | null;
};

export interface FieldSearch {
  entity: EquipmentEntity;
  fields: Field[] | null;
};

export interface SearchState {
  forms: Array<FieldSearch>;
  statusLoading: LoadingState;
};
