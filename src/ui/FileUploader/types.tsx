export interface FileUploaderProps {
  name: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  color?: 'blue' | 'orange' | 'green';
  classNameLabel?: string;
  classNameContainer?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};