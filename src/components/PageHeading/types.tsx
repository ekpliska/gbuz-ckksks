import { IHeadingSettings } from 'route/types';

export interface PageHeadingProps extends IHeadingSettings {
  buttonCreateLabel?: string;
  createMethod?: () => void;
  exportPdfMethod?: () => void;
  exportExcelMethod?: () => void;
  uploadFileButton?: React.ReactNode[];
  tooltips?: React.ReactNode[];
  classNameContainer?: string;
};