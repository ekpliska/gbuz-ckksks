export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  type?: 'button' | 'submit' | 'reset';
  classNameContainer?: string;
  classNameButton?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}