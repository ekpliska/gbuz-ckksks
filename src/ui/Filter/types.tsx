import React from 'react';
import { FieldInputProps } from 'formik';
import { SelectValue } from 'ui/Inputs/Select/types';
import { TPickerTypes } from 'ui/Inputs/DateInput/types';

export type FilterTypes = 'TEXT' | 'SELECT' | 'DATETIME' | 'CHECKBOX';
export type ColWidthTypes =
  | '--col_12'
  | '--col_11'
  | '--col_10'
  | '--col_9'
  | '--col_8'
  | '--col_7'
  | '--col_6'
  | '--col_5'
  | '--col_4'
  | '--col_3'
  | '--col_2'
  | '--col_1';

export interface FilterItem extends Partial<FieldInputProps<unknown>> {
  label: string;
  type: FilterTypes;
  name: string;
  placeholder?: string;
  colWidth: ColWidthTypes;
  options?: SelectValue[];
  dateFormat?: TPickerTypes;
}

export interface FilterItemProps {
  [index: number]: FilterItem;
}

export interface FilterProps<T> {
  initialValues: T;
  fields: FilterItemProps[];
  isLoading?: boolean;
  isDisabled?: boolean;
  isShowDeleted?: boolean;
  onSubmit: (values: T) => void;
}

export type FilterField = FilterItem;

interface FilterFieldsProps {
  fields: Array<FilterItemProps>;
}

export interface IFilter {
  <T = unknown>(props: React.PropsWithChildren<FilterProps<T>>): React.ReactElement<FilterProps<T>>;
}

export interface IFilterFieldsProps {
  (
    props: React.PropsWithChildren<FilterFieldsProps>,
  ): React.ReactElement<FilterFieldsProps>;
}
