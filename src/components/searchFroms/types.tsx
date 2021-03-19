import { Dispatch, SetStateAction } from 'react';

export interface MeasuringInstrumentsDataType {
  nameEquiments: string;
  factoryNumber: string;
  inventoryNumber: string;
  certificateNumber: string;
  verificationStatus: string;
};

export interface SearchFormProps<T> {
  currentData?: T;
  setData?: Dispatch<SetStateAction<T>>;
};