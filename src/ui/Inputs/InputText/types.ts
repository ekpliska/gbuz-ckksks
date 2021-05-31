
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
  validateText?: string | null;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClickStartIcon?: () => void;
  onClickEndIcon?: () => void;
  onClearInput?: (fieldKey: string) => void;
  сontainerClassName?: string;
  tabindex?: number;
  readonly?:boolean;
};

export interface InputLabelProps {
  label: string;
};