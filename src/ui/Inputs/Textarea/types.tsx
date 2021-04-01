export interface TextareaProps {
  name: string;
  value: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  cols?: number;
  isCounterVisible?: boolean;
  maxCountLetters?: number;
  сontainerClassName?: string;
  onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
};