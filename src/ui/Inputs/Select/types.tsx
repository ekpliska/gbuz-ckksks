export interface IOptionType {
  id: number;
  name: string;
};

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: IOptionType[] | null;
  value?: IOptionType | null;
  classNameContainer?: string;
  onSelect?: (option: IOptionType | null, inputName: string) => void;
};