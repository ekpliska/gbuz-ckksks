export interface CheckboxProps {
  id?: string;
  name: string;
  label: string;
  value?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNameContainer?: string;
};