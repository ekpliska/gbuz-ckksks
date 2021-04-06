import { Dispatch, SetStateAction } from 'react';

export interface SearchFormProps<T> {
  currentData?: Partial<T>;
  setData?: Dispatch<SetStateAction<T>>;
};