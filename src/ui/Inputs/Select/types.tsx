export interface SelectValue {
  id: number;
  name: string;
  valueCode?: string | number | boolean | null;
};

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: SelectValue[] | null;
  value?: SelectValue | null;
  classNameContainer?: string;
  onSelect?: (option: SelectValue | null, inputName: string) => void;
};