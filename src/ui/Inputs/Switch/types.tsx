export interface SwitchProps {
  id?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNameContainer?: string;
};