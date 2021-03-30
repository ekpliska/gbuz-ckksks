export interface IOptionType {
  id: number | string;
  value: string;
};

export interface SelectProps {
  label?: string;
  placeholder?: string;
  options: IOptionType[] | null;
  value?: IOptionType | null;
  classNameContainer?: string;
  onSelect?: (option: IOptionType | null) => void;
};