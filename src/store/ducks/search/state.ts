import { LoadingState } from 'store/loadingState';
import { EquipmentEntity } from 'models/equipments';

export interface Field {
  [name: string]: string | number | { id: number, name: string } | null;
};

export interface FieldSearchProps {
  entity: EquipmentEntity;
  values: Field | null;
};

export interface SearchState {
  fields: FieldSearchProps[];
  statusLoading: LoadingState;
};
