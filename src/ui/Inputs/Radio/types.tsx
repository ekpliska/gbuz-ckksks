export interface RadioProps {
  id?: string;
  name: string;
  label: string;
  value: string | number;
  radioValue: string | number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNameContainer?: string;
};