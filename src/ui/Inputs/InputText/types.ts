
export interface InputTextProps {
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: 'text' | 'password' | 'number',
  label?: string;
  disabled?: boolean;
  required?: boolean;
  isValidate?: boolean;
  validateText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClickStartIcon?: () => void;
  onClickEndIcon?: () => void;
  onClearInput?: () => void;
  сontainerClassName?: string;
  tabindex?: number;
  readonly?:boolean;
};

export interface InputLabelProps {
  label: string;
};