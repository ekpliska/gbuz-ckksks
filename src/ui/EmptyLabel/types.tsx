export enum EmptyLabelTypes {
  WITH_IMG = 'image',
  SPAN = 'span',
}

export interface EmptyLabelProps {
  textLabel: string;
  type?: EmptyLabelTypes;
};