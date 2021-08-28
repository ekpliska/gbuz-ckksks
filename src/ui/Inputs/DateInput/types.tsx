import { Moment } from 'moment';
import { TDateTimeFormat } from 'utils/constants';

export declare type EventValue<DateType> = DateType | null;
export declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

type TPickerCategories = 'date-picker' | 'date-range';

export type TPickerTypes = 'date' | 'month' | 'year';

export interface DateInputProps {
  value: EventValue<Moment> | RangeValue<Moment> | null;
  label?: string;
  placeholder?: string | [string, string];
  category?: TPickerCategories;
  picker?: TPickerTypes;
  disabled?: boolean;
  dateFormat?: TDateTimeFormat;
  onChange?: (value: EventValue<Moment> | RangeValue<Moment> | null) => void;
}
