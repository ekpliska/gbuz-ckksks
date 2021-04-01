import { Moment } from 'moment';
import { TDateTimeFormat } from 'utils/constatnts';

type TPickerTypes = 'date' | 'month' | 'year';

export interface DateInputProps {
  label: string;
  value: Moment | null;
  picker?: TPickerTypes;
  disabled?: boolean;
  dateFormat?: TDateTimeFormat;
  onChange?: (value: Moment | null) => void;
}
