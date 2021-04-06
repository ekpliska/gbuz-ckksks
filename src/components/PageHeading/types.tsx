import { IHeadingSettings } from 'route/types';

export interface PageHeadingProps extends IHeadingSettings {
  buttonCreateLabel?: string;
  createMethod?: () => void;
  exportPdfMethod?: () => void;
  exportExcelMethod?: () => void;
  tooltips?: React.ReactNode[];
  classNameContainer?: string;
};