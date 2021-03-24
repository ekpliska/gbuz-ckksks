export interface SwitchProps {
  id?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  optionLabels?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  classNameContainer?: string;
};