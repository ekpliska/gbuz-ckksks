export interface PageHeadingProps {
  title?: string;
  titleIcon?: React.ReactNode;
  buttonActionLabel?: string;
  buttonActionIcon?: React.ReactNode;
  buttonActionMethod?: () => void;
  exportToPdfMethod?: () => void;
  exportToXlsx?: () => void;
  tooltips?: React.ReactNode[];
  classNameContainer?: string;
};