import { LoadingState } from 'store/loadingState';
import { EquipmentEntity } from 'models/equipments';
import { SelectValue } from 'ui/Inputs/Select/types';

export interface Field {
  [name: string]: string | number | boolean | SelectValue | null;
};

export interface FieldSearchProps {
  entity: EquipmentEntity;
  values: Field | null;
};

export interface SearchState {
  fields: FieldSearchProps[];
  statusLoading: LoadingState;
};
